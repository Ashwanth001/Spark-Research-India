# Internal Security Policy

## Supported Versions

Since this is a private repository for the Spark Research India website, we only actively monitor and patch our live environments and active development branches.

| Branch / Environment | Status |
| :--- | :--- |
| `main` (Production) | :white_check_mark: Supported |
| Active feature branches | :white_check_mark: Supported |
| Stale / archived branches | :x: Not supported |

## Scope

To save time during triage and keep our focus on what we can actually fix, please ensure the vulnerability falls within the scope of our project.

###  :dart: In Scope
* Source code vulnerabilities (e.g., XSS, insecure data handling, hydration-based DOM injections) within the `sri-website` repository.
* Misconfigurations in our Next.js configuration or deployment environment.
* Exposed secrets, credentials, or environment variables committed to the repository.
* High or Critical severity vulnerabilities in our direct npm dependencies (listed in `package.json`).

### :no_entry_sign: Out of Scope
* Vulnerabilities in third-party platforms we use but do not control (e.g., Google Forms infrastructure used for student registration), though we are looking forward to hear if there is a more secure alternative to that service.
* Volumetric / Denial of Service (DoS/DDoS) attacks against the live site.
* Spam or bot abuse targeting the public contact email or phone number.
* Social engineering or phishing attempts against internal team members.
* Theoretical vulnerabilities without a plausible exploitation path.

## Reporting a Vulnerability

As an internal team, our goal is to catch and patch vulnerabilities before they ever hit production. If you spot a security risk, misconfiguration, or vulnerable dependency while working on the codebase, please escalate it immediately.

**Do not leave critical security vulnerabilities sitting in the general backlog or casually mention them in unrelated PRs.**

### How to report:
1. **Ping the Lead:** Message Ashwanth or Mradul directly or email **ashwanth.sivakumar@gmail.com**, **mradulumrao@gmail.com** so we are aware of the issue immediately.
2. **Draft an Issue:** Create a new issue in this repository. Use the `security` and `bug` labels.
3. **Hold the Merge:** If the vulnerability is in your current working branch, do not merge it into `main` until the security gap is closed.

### What to include in your issue:
* **The Risk:** A clear description of the vulnerability (e.g., exposed environment variable, potential XSS, missing headers).
* **Steps to Reproduce:** How can the rest of the team trigger or verify the issue?
* **Proposed Fix:** If you already know how to fix it, feel free to outline the solution or link an immediate hotfix PR.

We prioritize security patches over standard feature development. Once reported, we will triage the issue, assign it, and push a fix to `main` as a top priority.
