---
title: "Course Scheduler CLI"
category: "software"
role: "Solo developer"
tech: ["C", "Linked Lists", "GNU Make"]
type: "individual"
link: "https://example.com/course-scheduler"
source: "https://github.com/example/course-scheduler"
summary: "A terminal utility that builds non-conflicting course schedules from a CSV of sections, written in C for a data structures coursework."
images: ["/projects/course-scheduler-1.svg"]
date: "2024"
featured: true
---

## The problem

Registering for classes meant juggling a spreadsheet of sections by hand. I wanted a tool that would take the raw section list and emit every valid, conflict-free schedule combination.

## What I did

- Parsed a CSV of courses into a linked-list representation of sections
- Implemented a backtracking search over section time slots to enumerate conflict-free schedules
- Added a `--compact` flag that prints only the fewest-slot schedules
- Wrote a small test harness with sample CSVs covering edge cases (overlapping labs, cross-listed courses)

## Results

The tool produced all 12 valid schedules for a typical 5-course semester in under 50 ms on a laptop, and it caught a real timetable clash in my own registration that the official system showed as valid.
