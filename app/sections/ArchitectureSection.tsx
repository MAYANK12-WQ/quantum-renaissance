import ScrollReveal from '@/components/ui/ScrollReveal'

const ragCode = `from langchain.embeddings import OpenAIEmbeddings
from langchain.vectorstores import Pinecone
from langchain.schema import Document
import asyncio

class QuantumRetriever:
    def __init__(self, index_name: str):
        self.embeddings = OpenAIEmbeddings(
            model="text-embedding-3-large"
        )
        self.store = Pinecone.from_existing_index(
            index_name=index_name,
            embedding=self.embeddings
        )

    async def retrieve(
        self,
        query: str,
        k: int = 5
    ) -> list[Document]:
        return await self.store.asimilarity_search(
            query,
            k=k,
            score_threshold=0.82
        )|`

const agentCode = `from crewai import Agent, Task, Crew
from langchain_anthropic import ChatAnthropic
from langchain_openai import ChatOpenAI

researcher = Agent(
    role="Senior AI Research Analyst",
    goal="Uncover deep market intelligence",
    llm=ChatAnthropic(
        model="claude-3-5-sonnet-20241022"
    ),
    verbose=True
)

strategist = Agent(
    role="Strategic Synthesis Engine",
    goal="Convert insights to action plans",
    llm=ChatOpenAI(model="gpt-4o"),
    tools=[WebSearchTool(), DataTool()],
    verbose=True
)

crew = Crew(
    agents=[researcher, strategist],
    tasks=[research_task, strategy_task]
)
result = crew.kickoff()|`

function CodeCard({ title, code, lang }: { title: string; code: string; lang: string }) {
  const lines = code.split('\n')
  return (
    <div className="glass-card" style={{ overflow: 'hidden', position: 'relative' }}>
      {/* macOS header */}
      <div style={{
        padding: '14px 20px',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        background: 'rgba(255,255,255,0.02)',
      }}>
        <div style={{ display: 'flex', gap: 6 }}>
          {['#ff5f57', '#febc2e', '#28c840'].map((c) => (
            <div key={c} style={{ width: 12, height: 12, borderRadius: '50%', background: c }} />
          ))}
        </div>
        <span style={{ fontFamily: 'Space Mono', fontSize: 11, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.1em' }}>
          {title}
        </span>
        <span style={{ marginLeft: 'auto', fontFamily: 'Space Mono', fontSize: 9, color: '#00f5d4', letterSpacing: '0.15em' }}>
          {lang}
        </span>
      </div>

      {/* Code */}
      <div style={{ padding: '24px 28px', overflowX: 'auto' }}>
        <pre style={{ margin: 0, fontFamily: 'Space Mono', fontSize: 12, lineHeight: 1.8, whiteSpace: 'pre' }}>
          {lines.map((line, i) => {
            const isCursor = line.endsWith('|')
            const cleanLine = line.replace('|', '')
            return (
              <div key={i} style={{ display: 'flex', gap: 16 }}>
                <span style={{ color: 'rgba(255,255,255,0.15)', minWidth: 20, userSelect: 'none', textAlign: 'right' }}>{i + 1}</span>
                <span style={{ color: getLineColor(cleanLine) }}>
                  {cleanLine}
                  {isCursor && <span style={{ animation: 'blink 1s step-end infinite', color: '#00f5d4' }}>&#x258C;</span>}
                </span>
              </div>
            )
          })}
        </pre>
      </div>
    </div>
  )
}

function getLineColor(line: string): string {
  if (line.trim().startsWith('#') || line.trim().startsWith('from') || line.trim().startsWith('import')) return '#c9a84c'
  if (line.includes('class ') || line.includes('def ') || line.includes('async ')) return '#4361ee'
  if (line.includes('=') && !line.includes('==')) return 'rgba(255,255,255,0.8)'
  if (line.includes('"') || line.includes("'")) return '#00f5d4'
  return 'rgba(255,255,255,0.6)'
}

export default function ArchitectureSection() {
  return (
    <section id="architecture" className="section-padding" style={{ position: 'relative', zIndex: 10 }}>
      <div className="container-wide">
        <ScrollReveal>
          <div style={{ marginBottom: 64, textAlign: 'center' }}>
            <div style={{ fontFamily: 'Space Mono', fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#c9a84c', marginBottom: 16 }}>
              // Architecture
            </div>
            <h2 style={{ fontFamily: 'Cormorant Garamond', fontWeight: 300, fontSize: 'clamp(40px, 5vw, 64px)', lineHeight: 1.1 }}>
              Code That Runs<br />
              <em style={{ color: '#00f5d4' }}>Production Intelligence</em>
            </h2>
          </div>
        </ScrollReveal>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          <ScrollReveal delay={0}>
            <CodeCard title="rag_pipeline.py" code={ragCode} lang="Python 3.12" />
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <CodeCard title="agent_orchestrator.py" code={agentCode} lang="Python 3.12" />
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
