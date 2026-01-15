import { useState } from "react";

export default function AIAssistantDemo() {
  const [candidate, setCandidate] = useState("");
  const [summary, setSummary] = useState("");
  const [transcript, setTranscript] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.title}>AI Recruiter Assistant (Demo)</h1>
        <p style={styles.subtitle}>
          Internal tool for recruiters. Candidates never see this.
        </p>

        {!submitted ? (
          <>
            {/* Candidate */}
            <label style={styles.label}>Candidate Name / ID</label>
            <input
              style={styles.input}
              placeholder="e.g. John Tan / JT-1023"
              value={candidate}
              onChange={(e) => setCandidate(e.target.value)}
            />

            {/* Summary */}
            <label style={styles.label}>
              What did the candidate ask? What did you reply?
            </label>
            <textarea
              style={styles.textarea}
              placeholder="2–3 lines is enough. Example:
Candidate asked about visa sponsorship and salary range.
5 years backend (Python, Django).
I explained the process and asked for CV."
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
            />

            {/* Optional transcript */}
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
            {/* AI Understanding */}
            <h2 style={styles.sectionTitle}>AI Understanding</h2>
            <div style={styles.card}>
              <p><strong>Candidate:</strong> {candidate}</p>
              <ul>
                <li><strong>Role Type:</strong> Backend Engineer</li>
                <li><strong>Experience:</strong> ~5 years</li>
                <li><strong>Skills Detected:</strong> Python, Django</li>
                <li><strong>Key Concerns:</strong> Visa sponsorship, salary</li>
                <li><strong>Status:</strong> Waiting for CV</li>
              </ul>
              <p style={styles.note}>
                (Auto-extracted by AI from the interaction note)
              </p>
            </div>

            {/* Suggested Replies */}
            <h2 style={styles.sectionTitle}>Suggested Reply Options</h2>

            <div style={styles.card}>
              <p><strong>Option 1 — Friendly</strong></p>
              <p>
                Thanks for reaching out! We do support visa sponsorship for
                suitable candidates. Please share your CV so we can review and
                discuss next steps.
              </p>
            </div>

            <div style={styles.card}>
              <p><strong>Option 2 — Direct</strong></p>
              <p>
                Yes, visa support is available depending on the role. Kindly
                send your CV so we can evaluate fit and advise further.
              </p>
            </div>

            <div style={styles.card}>
              <p><strong>Option 3 — Follow-up</strong></p>
              <p>
                Thank you for your interest. Once we receive your CV, we can
                review suitable backend roles and share details on visa and
                compensation.
              </p>
            </div>

            {/* Job Match Preview */}
            <h2 style={styles.sectionTitle}>Job Match Preview</h2>

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

            <button style={styles.secondaryButton} onClick={() => setSubmitted(false)}>
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
    maxWidth: "720px",
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
    minHeight: "110px",
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
  sectionTitle: {
    marginTop: "32px",
    marginBottom: "12px",
  },
  card: {
    background: "#f9fafb",
    padding: "16px",
    borderRadius: "8px",
    marginBottom: "12px",
    border: "1px solid #e5e7eb",
  },
  note: {
    fontSize: "13px",
    color: "#666",
  },
};
