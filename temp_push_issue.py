
import subprocess
import os

def create_issue():
    with open('plan_body.md', 'r') as f:
        body = f.read()
    
    title = "plan: Stabilize Next.js Portfolio & Cloudflare Deployment"
    
    # Use subprocess.run with list to avoid shell parsing issues
    try:
        result = subprocess.run(
            ['gh', 'issue', 'create', '--title', title, '--body', body],
            capture_output=True,
            text=True,
            check=True
        )
        print(f"Successfully created issue: {result.stdout}")
    except subprocess.CalledProcessError as e:
        print(f"Error creating issue: {e.stderr}")

if __name__ == "__main__":
    create_issue()
