import { anthropic } from '@/lib/anthropic'
import { QR_SYSTEM_PROMPT } from '@/lib/anthropic'

export const runtime = 'nodejs'

export async function POST(req: Request) {
  const { messages } = await req.json() as {
    messages: Array<{ role: 'user' | 'assistant'; content: string }>
  }

  const stream = await anthropic.messages.stream({
    model: 'claude-sonnet-4-6',
    max_tokens: 1024,
    system: QR_SYSTEM_PROMPT,
    messages: messages.map((m) => ({
      role: m.role,
      content: m.content,
    })),
  })

  const encoder = new TextEncoder()
  const readable = new ReadableStream({
    async start(controller) {
      for await (const chunk of stream) {
        if (
          chunk.type === 'content_block_delta' &&
          chunk.delta.type === 'text_delta'
        ) {
          controller.enqueue(encoder.encode(chunk.delta.text))
        }
      }
      controller.close()
    },
  })

  return new Response(readable, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'no-cache',
    },
  })
}
