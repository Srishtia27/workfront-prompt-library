// =============================================================
// data.js — Prompt library content
// Edit this file to add, remove, or change prompts and categories.
// Each prompt object needs: id, title, category, badge, icon,
// desc, tags (array), prompt (string).
// =============================================================

const promptData = [
  {
    id: 'calculated-field-builder',
    title: 'Calculated Field / Column Builder',
    category: 'Custom Forms & Fields',
    badge: 'forms',
    icon: '✎',
    desc: 'Build a Workfront calculated custom-data expression OR a report calculated-column expression from a plain-English requirement, with edge-case handling and a tested example.',
    tags: ['workfront', 'reporting', 'calculated-field'],
    prompt: `Build a Workfront calculated custom-data expression OR a report calculated-column expression from this plain-English requirement:

Requirement:
{{requirement}}

Include:
1) the recommended formula
2) a brief explanation of how it works
3) any edge cases or null-handling considerations
4) a tested example using sample values
5) if there are multiple valid approaches, recommend the safest one for reporting reliability

Assume the output should be production-ready for Workfront and easy for an admin to paste into a field or report.`
  },
  {
    id: 'custom-form-designer',
    title: 'Custom Form Designer',
    category: 'Custom Forms & Fields',
    badge: 'forms',
    icon: '▣',
    desc: 'Design a Workfront Custom Form with sections, fields, types, display logic, calculated fields, from a list of data the team needs to capture.',
    tags: ['workfront', 'custom-form', 'blueprint'],
    prompt: `Design a Workfront Custom Form for the following business scenario:

Scenario:
{{scenario}}

Data the team needs to capture:
{{data_list}}

Please provide:
- recommended form sections and field order
- field types and validation guidance
- required vs optional fields
- display logic / conditional reveal suggestions
- any calculated fields or auto-derived values
- notes on how to keep the form report-friendly and easy to maintain

Optimize for a real production setup, not a toy example.`
  },
  {
    id: 'custom-form-rationalization',
    title: 'Custom Form Rationalization',
    category: 'Custom Forms & Fields',
    badge: 'forms',
    icon: '◎',
    desc: 'Analyze a list of Workfront Custom Forms (and their fields) for duplication, fragmentation, and dead fields, and recommend a consolidated set with a migration path.',
    tags: ['workfront', 'audit', 'custom-form', 'cleanup'],
    prompt: `Analyze the following Workfront Custom Forms and field inventories for duplication, fragmentation, outdated fields, dead fields, and governance issues:

Forms / fields:
{{forms_and_fields}}

Return:
1) a consolidation recommendation
2) which forms should be merged, retired, or split
3) fields that are duplicated, unused, or ambiguous
4) a migration path for existing records
5) a recommended target form architecture
6) any reporting or automation risks created by the current design

Think like a Workfront architect doing a cleanup exercise for a real production environment.`
  },
  {
    id: 'request-intake-routing',
    title: 'Request Queue Routing Blueprint',
    category: 'Request Queues & Intake',
    badge: 'requests',
    icon: '↳',
    desc: 'Design intake routing rules that turn request answers into the right team, priority, and downstream object.',
    tags: ['request-queue', 'routing', 'intake'],
    prompt: `Design a Workfront request-intake routing blueprint for this scenario:

Scenario:
{{intake_scenario}}

Inputs / form answers:
{{form_answers}}

Need help with:
- queue structure
- routing logic
- priority rules
- assignment rules
- when to create a task vs a project vs keep as an issue
- what fields are essential for downstream automation

Return the logic in a way that can be implemented in Workfront and, if needed, Workfront Fusion.`
  },
  {
    id: 'projects-template-intake',
    title: 'Project Template from Intake',
    category: 'Projects, Templates & Plans',
    badge: 'projects',
    icon: '▸',
    desc: 'Convert a request into a project while preserving form data, routing the right template, and auto-assigning owners.',
    tags: ['projects', 'template', 'intake'],
    prompt: `Design the logic for converting a request into a project while preserving intake data and applying the correct template.

Scenario:
{{scenario}}

Requirements:
- preserve key request answers into project custom fields
- choose the right template based on request type, region, or business unit
- auto-assign owners and initial tasks
- support stage gates or approvals if needed
- prevent duplicate creation on repeated updates

Provide a recommended Workfront setup plus any Fusion logic required to make this reliable.`
  },
  {
    id: 'projects-governance-timeline',
    title: 'Timeline Governance & Baseline Analysis',
    category: 'Projects, Templates & Plans',
    badge: 'projects',
    icon: '⏳',
    desc: 'Manage schedule changes when dependencies shift and still keep milestone reporting accurate.',
    tags: ['timeline', 'dependencies', 'baseline'],
    prompt: `Help me design a governance pattern for project timelines in Workfront.

Scenario:
{{timeline_scenario}}

Need to handle:
- dependency-driven schedule shifts
- milestone governance
- baseline vs current date comparisons
- change explanation for leadership
- reporting consistency when dates move

Give a recommended object design, reporting approach, and a practical way to keep the timeline trustworthy.`
  },
  {
    id: 'reports-executive-dashboards',
    title: 'Executive Dashboard Builder',
    category: 'Reports & Dashboards',
    badge: 'reporting',
    icon: '▤',
    desc: 'Build an executive dashboard that shows only meaningful exceptions across projects, tasks, and issues.',
    tags: ['dashboard', 'executive', 'exceptions'],
    prompt: `Create an executive dashboard strategy for Workfront.

Objective:
{{objective}}

Data available:
{{available_data}}

Please recommend:
- the best report types
- how to combine project, task, and issue data
- which KPIs should be surfaced as exceptions
- what filters/groupings make the dashboard leadership-friendly
- how to avoid noisy or redundant reporting

Focus on a real executive review meeting, not a generic report.`
  },
  {
    id: 'reports-operational-analysis',
    title: 'Operational KPI & Bottleneck Analysis',
    category: 'Reports & Dashboards',
    badge: 'reporting',
    icon: '◫',
    desc: 'Measure throughput, aging, and turnaround across requests or tasks.',
    tags: ['KPI', 'throughput', 'bottlenecks'],
    prompt: `Design a Workfront reporting approach for operational analysis.

Goal:
{{goal}}

Need to measure:
- throughput
- aging
- turnaround time
- bottlenecks by team, status, or work type
- trends over time

Please suggest the report structure, fields required, and how to interpret the results.`
  },
  {
    id: 'access-controlled-visibility',
    title: 'Access & Sharing Troubleshooter',
    category: 'Layouts, Access & Licenses',
    badge: 'access',
    icon: '🔒',
    desc: 'Design access rules that support collaboration without oversharing and troubleshoot visibility issues.',
    tags: ['permissions', 'sharing', 'visibility'],
    prompt: `Troubleshoot this Workfront access / visibility issue:

Scenario:
{{access_issue}}

Please explain:
- likely root causes
- how access levels, sharing, groups, and layout permissions interact
- what to check first
- what the proper long-term access design should be

I want a practical diagnosis and a governance recommendation.`
  },
  {
    id: 'licenses-entitlements',
    title: 'License & Entitlement Planning',
    category: 'Layouts, Access & Licenses',
    badge: 'access',
    icon: '◌',
    desc: 'Model license needs and access patterns across different user types and teams.',
    tags: ['licenses', 'entitlements', 'governance'],
    prompt: `Help me plan Workfront licenses and entitlements for the following user groups:

User groups:
{{user_groups}}

Please recommend:
- likely license / entitlement patterns
- who needs edit vs review vs view access
- how to avoid over-licensing while maintaining governance
- any risks if access is too broad or too narrow

Frame the answer for a Workfront administrator or PMO lead.`
  },
  {
    id: 'fusion-scenario-design',
    title: 'Fusion Scenario Design Blueprint',
    category: 'Fusion — Integrations & Automation',
    badge: 'fusion',
    icon: '⟲',
    desc: 'Design a Fusion scenario that creates the right object, maps fields, and handles branching and deduplication.',
    tags: ['fusion', 'scenario', 'mapping'],
    prompt: `Design a Workfront Fusion scenario for this business flow:

Scenario:
{{fusion_scenario}}

Requirements:
- pick the right trigger and modules
- map fields carefully
- branch logic when conditions differ
- prevent duplicates
- explain how to handle failures and retries

Give me a clear module-by-module blueprint and the reasoning behind it.`
  },
  {
    id: 'fusion-sync-enrichment',
    title: 'Cross-System Sync & Enrichment',
    category: 'Fusion — Integrations & Automation',
    badge: 'fusion',
    icon: '⇄',
    desc: 'Keep Workfront synced with external systems without overwriting valid changes.',
    tags: ['sync', 'enrichment', 'bi-directional'],
    prompt: `Help me design a reliable cross-system sync between Workfront and another application.

Systems involved:
{{systems}}

Need to handle:
- enrichment before create/update
- field mapping and transformation
- preventing overwrite conflicts
- bidirectional sync rules
- reconciliation when data diverges

Recommend the safest architecture and the controls needed for production.`
  },
  {
    id: 'fusion-reliability',
    title: 'Fusion Error Handling & Reliability',
    category: 'Fusion — Integrations & Automation',
    badge: 'fusion',
    icon: '⚙',
    desc: 'Design error handling so the scenario retries intelligently and logs failures properly.',
    tags: ['reliability', 'retries', 'logs'],
    prompt: `Create an error-handling and reliability plan for this Fusion scenario:

Scenario:
{{scenario}}

Issues to guard against:
- intermittent API errors
- bad payloads
- rate limits
- failed mapping steps
- duplicate processing

Please propose retry logic, logging, dead-letter handling, and monitoring ideas.`
  },
  {
    id: 'brd-generation',
    title: 'BRD Generation',
    category: 'Discovery, Requirements & Architecture',
    badge: 'governance',
    icon: '⌁',
    desc: 'Generate a structured Business Requirements Document (BRD) for a Workfront implementation or enhancement from discovery notes.',
    tags: ['brd', 'requirements', 'discovery', 'architecture'],
    prompt: `Generate a Business Requirements Document (BRD) for a Workfront implementation based on the following inputs:

Project / initiative name: {{project_name}}
Client / team: {{client}}
Discovery notes / key pain points: {{discovery_notes}}
Scope (in scope / out of scope): {{scope}}

Structure the BRD with these sections:
1. **Executive Summary** — what is being built and why
2. **Business Objectives** — measurable goals this initiative addresses
3. **Stakeholders** — roles, responsibilities, and sign-off owners
4. **Current State** — how work is managed today and where it breaks down
5. **Future State** — how Workfront will support the desired process
6. **Functional Requirements** — numbered list of must-have capabilities
7. **Non-Functional Requirements** — performance, access, integration, and data needs
8. **Assumptions & Constraints** — what is being assumed or is outside our control
9. **Success Criteria** — how we will know the implementation is successful

Write in clear business language. Avoid Workfront jargon unless explaining a specific feature.`
  },
  {
    id: 'pmo-client-communications',
    title: 'PMO Client Communication Drafting',
    category: 'PMO & Client Comms',
    badge: 'governance',
    icon: '✉',
    desc: 'Draft a concise, executive-ready message about status, risks, changes, or adoption.',
    tags: ['PMO', 'communications', 'executive'],
    prompt: `Draft a client or executive communication for the following Workfront-related update:

Update:
{{update}}

Please make it:
- concise
- clear and confident
- suitable for a PMO or client-facing audience
- structured with the right level of detail
- ready to send after light editing

Also include a shorter version if helpful.`
  },

  // --- Custom Forms & Fields (simple) ---
  {
    id: 'field-label-naming',
    title: 'Field Label Naming Guide',
    category: 'Custom Forms & Fields',
    badge: 'forms',
    icon: '✎',
    desc: 'Generate consistent, user-friendly field labels and help text for a Workfront custom form section.',
    tags: ['custom-form', 'naming', 'labels', 'ux'],
    prompt: `I'm building a Workfront custom form for the following use case:

Use case: {{use_case}}

Please suggest:
1. Clear, concise field labels (no jargon)
2. Short help text (under 20 words each) for any fields that might confuse users
3. Recommended field order within the form section
4. Any fields that should be marked required vs. optional

Keep labels short enough to display cleanly in a Workfront form column layout.`
  },

  // --- Projects, Templates & Plans (simple) ---
  {
    id: 'project-status-update',
    title: 'Project Status Update Writer',
    category: 'Projects, Templates & Plans',
    badge: 'projects',
    icon: '◈',
    desc: 'Draft a concise weekly project status update from raw notes, suitable for a Workfront update or client email.',
    tags: ['project', 'status', 'update', 'communication'],
    prompt: `Write a concise project status update based on the following notes:

Project name: {{project_name}}
Raw notes / bullet points: {{notes}}
Current phase: {{phase}}
Any blockers: {{blockers}}

Format the output as:
- **Overall status** (Green / Amber / Red + one sentence why)
- **Completed this week** (3–5 bullets)
- **Planned next week** (3–5 bullets)
- **Risks / blockers** (if any)

Keep it under 200 words. Write in plain business English.`
  },

  // --- Request Queues & Intake (simple) ---
  {
    id: 'queue-topic-designer',
    title: 'Queue Topic & Sub-Topic Designer',
    category: 'Request Queues & Intake',
    badge: 'requests',
    icon: '⊞',
    desc: 'Design a logical queue topic / sub-topic hierarchy for a Workfront request queue based on the types of work the team receives.',
    tags: ['request-queue', 'topics', 'intake', 'routing'],
    prompt: `Design a Workfront request queue topic and sub-topic structure for the following team:

Team / department: {{team}}
Types of requests they receive: {{request_types}}

For each topic, provide:
1. Topic name (short, clear)
2. 2–4 sub-topics where appropriate
3. A one-line description of when a requester should choose this topic
4. Any routing note (e.g. assign to a specific role or group)

Keep the hierarchy shallow — no more than 2 levels deep.`
  },

  // --- Layouts, Access & Licenses (simple) ---
  {
    id: 'layout-template-planner',
    title: 'Layout Template Planner',
    category: 'Layouts, Access & Licenses',
    badge: 'access',
    icon: '▤',
    desc: 'Plan which Workfront layout templates are needed for a set of user personas and what each template should show or hide.',
    tags: ['layout', 'template', 'access', 'personas'],
    prompt: `Plan Workfront layout templates for the following personas:

Personas: {{personas}}

For each persona:
1. Recommend a layout template name
2. List the left-nav items they need (and which to hide)
3. Recommend the default landing page / home screen
4. Note any pinned pages or custom sections to add

Keep it practical — focus on what each persona actually uses day-to-day.`
  },

  // --- Reports & Dashboards (simple) ---
  {
    id: 'report-filter-builder',
    title: 'Report Filter Builder',
    category: 'Reports & Dashboards',
    badge: 'reporting',
    icon: '⊟',
    desc: 'Generate Workfront report filter criteria in plain English from a business question, ready to configure in Report Builder.',
    tags: ['report', 'filter', 'reporting', 'builder'],
    prompt: `I need to build a Workfront report that answers this business question:

Question: {{business_question}}
Object type (Task / Project / Issue / Hour / etc.): {{object_type}}

Please provide:
1. The filter criteria needed (field name, operator, value)
2. Any groupings or sorting that would make this report most useful
3. Recommended columns to include
4. Any wildcard values ($$USER.ID, $$TODAY, etc.) that apply

Write the filter logic in plain English so I can configure it step-by-step in Workfront Report Builder.`
  },

  // --- Fusion (simple) ---
  {
    id: 'fusion-trigger-map',
    title: 'Fusion Trigger & Action Mapper',
    category: 'Fusion — Integrations & Automation',
    badge: 'fusion',
    icon: '⟳',
    desc: 'Map out the triggers, conditions, and actions for a simple Workfront Fusion automation before building it.',
    tags: ['fusion', 'automation', 'trigger', 'mapping'],
    prompt: `Help me plan a Workfront Fusion scenario before I build it.

What should it do: {{description}}
Trigger system: {{trigger_system}} (e.g. Workfront, Slack, email, webhook)
Target system: {{target_system}}

Please provide:
1. Recommended trigger module and when it fires
2. Any filter/condition logic needed before the action
3. The action module(s) to use and the key fields to map
4. Potential error cases to handle
5. Suggested scenario name and folder

Keep it concise — I just need a build plan, not code.`
  },

  // --- Data Migration & Environments ---
  {
    id: 'sandbox-refresh-checklist',
    title: 'Sandbox Refresh Checklist',
    category: 'Data Migration & Environments',
    badge: 'governance',
    icon: '⟳',
    desc: 'Generate a pre- and post-refresh checklist for a Workfront sandbox or preview environment refresh.',
    tags: ['sandbox', 'refresh', 'environment', 'migration'],
    prompt: `Generate a checklist for a Workfront sandbox / preview environment refresh.

Environment being refreshed: {{environment}} (Preview / Sandbox 1 / Sandbox 2)
Planned refresh date: {{date}}
Key stakeholders: {{stakeholders}}

Provide:
1. **Pre-refresh steps** (things to document or export before the refresh wipes the environment)
2. **Post-refresh validation steps** (confirm critical config is intact)
3. **Communication tasks** (who to notify and when)
4. **Rollback / escalation note** if something looks wrong after refresh

Format as a numbered checklist grouped by phase.`
  },
  {
    id: 'data-migration-field-map',
    title: 'Data Migration Field Mapper',
    category: 'Data Migration & Environments',
    badge: 'governance',
    icon: '⇄',
    desc: 'Create a field mapping table to migrate data from a legacy system into Workfront custom fields.',
    tags: ['migration', 'field-map', 'data', 'import'],
    prompt: `I need to migrate data from a legacy system into Workfront.

Legacy system: {{legacy_system}}
Object being migrated (Project / Task / Issue / Custom object): {{object_type}}
Sample legacy fields: {{legacy_fields}}

Please create a field mapping table with these columns:
| Legacy Field | Legacy Type | Workfront Field | Workfront Type | Transformation Needed | Notes |

Then flag:
- Any fields with no clear Workfront equivalent
- Any data type mismatches that need transformation
- Fields that should be skipped or archived instead of migrated`
  },

  // --- Audit & UAT Testing ---
  {
    id: 'uat-test-case-writer',
    title: 'UAT Test Case Writer',
    category: 'Audit & UAT Testing',
    badge: 'governance',
    icon: '✔',
    desc: 'Write structured UAT test cases for a Workfront configuration or feature from an acceptance criteria list.',
    tags: ['uat', 'testing', 'test-case', 'qa'],
    prompt: `Write UAT test cases for the following Workfront configuration:

Feature / area being tested: {{feature}}
Acceptance criteria: {{acceptance_criteria}}
Tester persona (role in Workfront): {{persona}}

For each test case provide:
- Test case ID and title
- Preconditions (what must be set up first)
- Steps (numbered, specific enough to follow without guessing)
- Expected result
- Pass / Fail field

Format as a table or numbered list. Keep steps short and actionable.`
  },
  {
    id: 'config-audit-review',
    title: 'Configuration Audit Reviewer',
    category: 'Audit & UAT Testing',
    badge: 'governance',
    icon: '◎',
    desc: 'Review a Workfront configuration area and identify gaps, risks, or inconsistencies against best practices.',
    tags: ['audit', 'review', 'configuration', 'best-practices'],
    prompt: `Review the following Workfront configuration details and identify any gaps or risks.

Area being audited: {{area}} (e.g. Custom Forms, Request Queues, Access Levels)
Current configuration summary: {{config_summary}}
Known pain points or complaints: {{pain_points}}

Please provide:
1. **What looks good** (brief)
2. **Gaps or risks** (with severity: High / Medium / Low)
3. **Recommended fixes** (prioritised)
4. **Quick wins** (changes that can be made in under 30 minutes)

Be specific — reference Workfront objects, fields, or settings by name where possible.`
  },

  // --- Discovery, Requirements & Architecture (simple) ---
  {
    id: 'discovery-interview-guide',
    title: 'Discovery Interview Guide',
    category: 'Discovery, Requirements & Architecture',
    badge: 'governance',
    icon: '◈',
    desc: 'Generate a structured discovery interview guide for a Workfront implementation kick-off.',
    tags: ['discovery', 'interview', 'requirements', 'kick-off'],
    prompt: `Create a discovery interview guide for a Workfront implementation.

Client industry: {{industry}}
Team / department being onboarded: {{team}}
Key pain points mentioned in sales: {{pain_points}}

Provide:
1. 3–4 warm-up questions (role, day-to-day, current tools)
2. 6–10 core discovery questions covering: current process, handoffs, reporting needs, approval flows, and data requirements
3. 2–3 closing questions (priorities, success metrics, blockers)
4. One column for "probe deeper if…" guidance

Format as a table with Question | Purpose | Probe if… columns.`
  },

  // --- PMO & Client Comms (simple) ---
  {
    id: 'meeting-recap-writer',
    title: 'Meeting Recap Writer',
    category: 'PMO & Client Comms',
    badge: 'governance',
    icon: '≡',
    desc: 'Turn raw meeting notes into a clean, structured recap email ready to send to the client or project team.',
    tags: ['PMO', 'meeting', 'recap', 'communications'],
    prompt: `Turn these raw meeting notes into a clean recap email.

Meeting topic: {{topic}}
Date: {{date}}
Attendees: {{attendees}}
Raw notes: {{notes}}

Format the email as:
- Subject line suggestion
- Opening sentence (meeting purpose + date)
- **Key decisions made** (bullets)
- **Action items** (owner · due date · description)
- **Next meeting** (date / agenda if known)

Keep it concise and professional. No filler phrases.`
  }
];

const categories = [
  { name: 'All', color: 'rgba(108,99,255,1)' },
  { name: 'Projects, Templates & Plans', color: '#6366f1' },
  { name: 'Custom Forms & Fields', color: '#8b5cf6' },
  { name: 'Request Queues & Intake', color: '#f59e0b' },
  { name: 'Layouts, Access & Licenses', color: '#ef4444' },
  { name: 'Reports & Dashboards', color: '#14b8a6' },
  { name: 'Fusion — Integrations & Automation', color: '#3b82f6' },
  { name: 'Data Migration & Environments', color: '#10b981' },
  { name: 'Audit & UAT Testing', color: '#ec4899' },
  { name: 'Discovery, Requirements & Architecture', color: '#64748b' },
  { name: 'PMO & Client Comms', color: '#0ea5e9' }
];
