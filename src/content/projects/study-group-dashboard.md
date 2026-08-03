---
title: "Study Group Dashboard"
category: "software"
role: "Frontend developer & UI design"
tech: ["React", "TypeScript", "Express", "SQLite"]
type: "team"
summary: "A dashboard for a college study group that tracks session attendance and quiz scores — the interface and flows were designed and built by me, including the layout for mobile."
images: ["/projects/study-group-dashboard-1.svg", "/projects/study-group-dashboard-2.svg"]
date: "2025"
featured: true
---

## The problem

Our study group kept attendance and quiz results in a shared spreadsheet that nobody could read on a phone, and it never told us which topics the group was weakest in.

## What I did

- Designed the UI/UX end to end: a session list, per-member attendance cards, and a weak-topic panel — mobile-first layout, since most members checked in from their phones
- Built the dashboard frontend in React with TypeScript against a small Express + SQLite API that two teammates wrote
- Introduced the weak-topic panel: a simple bar view of quiz performance per subject, which changed how the group planned its sessions

## Results

Session attendance logging became a one-tap action; the group now plans sessions around the weakest topics instead of by memory.
