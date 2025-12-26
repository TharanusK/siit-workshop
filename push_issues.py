import subprocess
import os

def create_issue(title, body_file):
    try:
        # Use subprocess to run gh issue create
        cmd = ["gh", "issue", "create", "--title", title, "--body-file", body_file]
        result = subprocess.run(cmd, capture_output=True, text=True)
        if result.returncode == 0:
            print(f"Successfully created issue: {title}")
            print(result.stdout)
        else:
            print(f"Failed to create issue: {title}")
            print(result.stderr)
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    create_issue("plan: Stabilize Next.js Portfolio & Cloudflare Deployment", "plan_body.md")
