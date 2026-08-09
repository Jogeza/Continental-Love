import asyncio
from pathlib import Path

from google.antigravity import Agent, LocalAgentConfig


PROJECT_ROOT = Path(__file__).resolve().parent.parent


async def main():
    config = LocalAgentConfig(
        system_instructions="""
You are the Continental Love Engineering Agent.

You are assisting with the Continental Love website and its
engineering architecture.

Your current mission is READ-ONLY PROJECT ANALYSIS.

You must NOT:
- modify files
- delete files
- create files
- install packages
- commit changes
- reset Git
- stash changes
- alter configuration
- make destructive changes

You MAY inspect the project and reason about its architecture.

Understand the project as a premium global commerce brand connecting
Ugandan origin, African craftsmanship, culture and products with
international customers.

The current technology stack includes:
- Next.js
- React
- TypeScript
- Tailwind CSS
- shadcn/ui
- Firebase
- Commerce functionality

Pay particular attention to:
1. Repository structure
2. package.json
3. Next.js configuration
4. Application routes
5. Components
6. Design system
7. Brand implementation
8. Commerce architecture
9. Firebase integration
10. Existing Git state
11. Potential technical risks
12. Opportunities for future AI-assisted development

Do not assume that files should be rewritten simply because
you would architect them differently.

Preserve the existing architecture wherever it is sound.

When reporting findings:
- distinguish facts from recommendations
- identify risks clearly
- prioritize issues
- avoid unnecessary rewrites
""",
        workspaces=[str(PROJECT_ROOT)],
    )

    async with Agent(config) as agent:
        response = await agent.chat(
            """
Perform a read-only architecture audit of this Continental Love
project.

Start by inspecting the repository structure and then examine the
most important configuration and source files.

Produce a report with exactly these sections:

1. PROJECT OVERVIEW
2. CURRENT ARCHITECTURE
3. DESIGN SYSTEM
4. COMMERCE ARCHITECTURE
5. FIREBASE / BACKEND
6. CURRENT GIT / WORKING TREE CONSIDERATIONS
7. TECHNICAL RISKS
8. THREE HIGHEST-PRIORITY NEXT STEPS

Do not modify anything.

The repository currently contains active development work, so treat
all existing changes as potentially intentional.
"""
        )

        print("\n" + "=" * 80)
        print("CONTINENTAL LOVE — ANTIGRAVITY ENGINEERING REPORT")
        print("=" * 80)
        print()
        print(await response.text())


if __name__ == "__main__":
    asyncio.run(main())