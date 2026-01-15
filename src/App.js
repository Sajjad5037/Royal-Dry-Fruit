import { useState } from "react";

export default function AIAssistantDemo() {
  const [candidate, setCandidate] = useState("");
  const [summary, setSummary] = useState("");
  const [transcript, setTranscript] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [showAskAI, setShowAskAI] = useState(false);


  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.title}>AI Recruiter Assistant (Demo)</h1>
        <p style={styles.subtitle}>
          Internal assistant for recruiters. Candidates never see this.
        </p>

        {!submitted ? (
          <>
            {/* STEP 1 */}
            <h2 style={styles.stepTitle}>Step 1 — Log Interaction</h2>
            <p style={styles.stepHint}>
              Takes ~30 seconds. This helps AI support you later.
            </p>

            <label style={styles.label}>Candidate Name / Internal Reference</label>
            <input
              style={styles.input}
              value="John Tan"
              readOnly
            />


            <label style={styles.label}>
              What did the candidate ask? What did you reply?
            </label>
            <textarea
              style={styles.textarea}
              value={
                summary ||
                `Candidate asked about visa sponsorship and salary range.
            Has 5 years backend experience (Python, Django).
            I explained the process and asked for CV.`
              }
              onChange={(e) => setSummary(e.target.value)}
            />

            <details style={styles.details}>
              <summary style={styles.summary}>
                Optional: Paste chat transcript (if helpful)
              </summary>
              <textarea
                style={styles.textarea}
                placeholder="Paste full or partial chat here (optional)"
                value={transcript}
                onChange={(e) => setTranscript(e.target.value)}
              />
            </details>

            <button
              style={styles.button}
              onClick={() => setSubmitted(true)}
              disabled={!candidate || !summary}
            >
              Save & Let AI Understand
            </button>
          </>
        ) : (
          <>
            {/* STEP 2 */}
            <h2 style={styles.stepTitle}>Step 2 — What AI Understood</h2>
            <p style={styles.stepHint}>
              AI converts your note into structured memory it can reuse.
            </p>

            <div style={styles.card}>
              <p><strong>Candidate:</strong> {candidate}</p>
              <ul>
                <li><strong>Intent:</strong> Actively job searching</li>
                <li><strong>Experience:</strong> ~5 years</li>
                <li><strong>Skills Detected:</strong> Python, Django</li>
                <li><strong>Key Concerns:</strong> Visa sponsorship, salary</li>
                <li><strong>Current Status:</strong> Waiting for CV</li>
              </ul>
              <p style={styles.note}>
                Auto-extracted from the interaction you logged.
              </p>
            </div>

            {/* STEP 3 */}
            <h2 style={styles.stepTitle}>Step 3 — AI Assistance Using This Memory</h2>

            <p style={styles.stepHint}>
              Based on this memory, AI can assist with replies and matching.
            </p>

            
            {/* FUTURE VALUE */}
            <h3 style={styles.subTitle}>How This Helps Later</h3>

            <div style={styles.card}>
              <ul>
                <li>AI remembers this candidate’s concerns and skills</li>
                <li>Future replies stay consistent</li>
                <li>Same data can be reused for job matching</li>
                <li>No need to reread old chats</li>
              </ul>
            </div>

            <h3 style={styles.subTitle}>Job Match Preview</h3>

                <div style={styles.card}>
                  <p><strong>Backend Engineer — FinTech Platform</strong></p>
                  <ul>
                    <li>Python & Django match</li>
                    <li>Visa support available</li>
                    <li>Mid-level salary band</li>
                  </ul>
                </div>

            <div style={styles.card}>
              <p><strong>API Engineer — SaaS Company</strong></p>
              <ul>
                <li>Strong backend experience</li>
                <li>Remote-friendly team</li>
              </ul>
            </div>
            {/* ASK AI PANEL */}
<h2 style={styles.stepTitle}>Ask AI for Assistance (Later)</h2>
<p style={styles.stepHint}>
  When the candidate contacts you again, you can ask AI for help using the
  stored context.
</p>

<div style={styles.card}>
  <p style={{ marginBottom: "12px" }}>
    <strong>Ask AI:</strong>
  </p>

  <div style={styles.askRow}>
    <button
      style={styles.askButton}
      onClick={() => setShowAskAI(true)}
    >
      Suggest a reply
    </button>

    <button style={styles.askButtonDisabled} disabled>
      Summarize candidate status
    </button>

    <button style={styles.askButtonDisabled} disabled>
      Suggest next action
    </button>
  </div>

  <p style={styles.note}>
    (AI uses past interactions for this candidate. Messages are never sent
    automatically.)
  </p>
</div>
{showAskAI && (
  <>
    <h3 style={styles.subTitle}>AI Suggested Replies</h3>

    <div style={styles.card}>
      <p><strong>Option 1 — Friendly</strong></p>
      <p>
        Hi John, thanks for following up. I’ve received your CV and will
        review it shortly. I’ll get back to you with next steps soon.
      </p>
    </div>

    <div style={styles.card}>
      <p><strong>Option 2 — Direct</strong></p>
      <p>
        Thanks for checking in. I’m currently reviewing your CV and will
        update you once the review is complete.
      </p>
    </div>

    <div style={styles.card}>
      <p><strong>Option 3 — Reassuring</strong></p>
      <p>
        Hi John, I’ve received your CV and appreciate your patience. I’ll
        follow up with feedback and next steps shortly.
      </p>
    </div>
  </>
)}


            <button
              style={styles.secondaryButton}
              onClick={() => {
                setSubmitted(false);
                setShowAskAI(false);
              }}
            >

              Log Another Interaction
            </button>
          </>
        )}
      </div>
    </div>
  );
}

const styles = {
  page: {
    background: "#f6f7f9",
    minHeight: "100vh",
    padding: "40px",
    fontFamily: "Inter, sans-serif",
  },
  container: {
    maxWidth: "760px",
    margin: "0 auto",
    background: "#fff",
    padding: "32px",
    borderRadius: "12px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
  },
  title: {
    marginBottom: "4px",
  },
  subtitle: {
    color: "#666",
    marginBottom: "24px",
  },
  stepTitle: {
    marginTop: "24px",
    marginBottom: "4px",
  },
  stepHint: {
    fontSize: "14px",
    color: "#555",
    marginBottom: "12px",
  },
  subTitle: {
    marginTop: "24px",
    marginBottom: "8px",
  },
  label: {
    display: "block",
    fontWeight: 600,
    marginBottom: "6px",
    marginTop: "16px",
  },
  input: {
    width: "100%",
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
  },
  textarea: {
    width: "100%",
    minHeight: "180px",
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    resize: "vertical",
  },
  details: {
    marginTop: "12px",
  },
  summary: {
    cursor: "pointer",
    fontWeight: 500,
    color: "#333",
    marginBottom: "8px",
  },
  button: {
    marginTop: "24px",
    width: "100%",
    padding: "12px",
    background: "#2563eb",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    cursor: "pointer",
  },
  secondaryButton: {
    marginTop: "24px",
    width: "100%",
    padding: "12px",
    background: "#e5e7eb",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
  card: {
    background: "#f9fafb",
    padding: "16px",
    borderRadius: "8px",
    marginBottom: "12px",
    border: "1px solid #e5e7eb",
  },
  askRow: {
  display: "flex",
  gap: "12px",
  flexWrap: "wrap",
},

askButton: {
  padding: "8px 14px",
  background: "#2563eb",
  color: "#fff",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  fontSize: "14px",
},

askButtonDisabled: {
  padding: "8px 14px",
  background: "#e5e7eb",
  color: "#666",
  border: "none",
  borderRadius: "6px",
  fontSize: "14px",
  cursor: "not-allowed",
},

  note: {
    fontSize: "13px",
    color: "#666",
  },
};
