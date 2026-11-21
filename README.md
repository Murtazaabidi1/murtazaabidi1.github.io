# Murtaza Hussain — Physical AI Research Portfolio

**🌐 Live website: [murtazaabidi1.github.io](https://murtazaabidi1.github.io/)**

Physical AI — Model Team Lead at [ROSAIC.ai](https://rosaic.ai/en), Seoul, South Korea.

## Overview

This repository contains the source of my personal research portfolio. It presents my work in
**Physical AI**, covering robotic manipulation, multimodal robot learning, and 3D computer vision, together
with my projects, publications, experience, and a downloadable CV.

## Research Areas

- **Vision-Language-Action models**: learning manipulation policies from vision, language, and force
- **Force-aware manipulation**: contact-rich manipulation and the contribution of force sensing
- **Multimodal robot learning**: synchronized vision, force, and robot-state data for reliable learning
- **Robot motion planning**: robot modeling, kinematics, and collision-aware planning
- **3D vision**: geometry-aware learning and state-space architectures for point clouds

## Featured Projects

| Project | Summary | Platform |
| --- | --- | --- |
| **LG Grasping KPI** | ROS 2-based cable-grasping system on the physical NACHI MZ07, integrating multimodal sensing and a real-time dashboard for grasp monitoring and evaluation. | NACHI MZ07 · Robotiq 2F-85 |
| **NACHI MZ07 + MoveIt 2** | ROS 2 / MoveIt 2 framework for collision-aware motion planning, mock trajectory execution, and virtual cable-grasping demonstrations. | NACHI MZ07 · MoveIt 2 (Simulation) |
| **Hybrid Dual VFLA** | Dual-system manipulation framework: deterministic System 1 control with bounded, force-aware System 2 residual corrections, safety supervision, and live RGB and force/torque monitoring. | Doosan E0509 · NVIDIA Isaac Sim |
| **Vision–Force Ablation** | True RGB-only baseline built by removing force modules, compared with RGB+force, with attention analysis to diagnose an incorrect target-selection failure. | Franka FR3 · Vision–Force Learning |
| **Franka–NACHI Integration** | Policy-generated trajectories executed on the real NACHI MZ07 through ROS 2 pose conversion, chunked 200 Hz command transport, and feedback re-anchoring, plus a reusable multi-robot execution architecture design. | Franka FR3 · NACHI MZ07 |
| **Multimodal Sensor & Dataset Reliability** | Reproducible multimodal robot-learning data: force/torque synchronization checks, versioned observation and action contracts, and an audited 96-episode simulation dataset. | NVIDIA Isaac Sim |

Full details, validation status, and results are on the [Projects page](https://murtazaabidi1.github.io/projects.html).
Industrial projects are summarized at a public level only; their source code is not part of this repository.

## Website Features

- **Responsive design**: mobile-first layouts tested from 320 px to 1440 px
- **Light / dark mode**: follows the device setting, remembers the visitor's choice, and loads without a flash of the wrong theme
- **Publications**: first-author and co-author papers with status, venue, and links
- **Projects**: compact homepage cards plus a detailed page with objectives, implementation, and key results
- **Journey & Highlights**: a chronological timeline of academic, research, and professional milestones
- **Downloadable CV**: linked from the hero and contact sections
- **Accessibility & SEO**: keyboard-friendly navigation, visible focus states, Open Graph metadata, sitemap

## Technology Stack

- [Jekyll](https://jekyllrb.com/): static site generator, with content driven by YAML files in `_data/`
- HTML, CSS (custom properties, no framework), and vanilla JavaScript
- [GitHub Pages](https://pages.github.com/): hosting and deployment

## Local Development

Requires Ruby and Bundler ([Jekyll installation guide](https://jekyllrb.com/docs/installation/)).

```bash
bundle install
bundle exec jekyll serve --livereload
```

Then open <http://127.0.0.1:4000>.

| To update | Edit |
| --- | --- |
| Profile, education, awards | `_data/profile.yml` |
| Projects | `_data/projects.yml` |
| Experience | `_data/experience.yml` |
| Journey & Highlights timeline | `_data/timeline.yml` |
| Publications | `_publications/*.md` |

## Acknowledgements

This site was originally based on the
[academic-homepage](https://github.com/luost26/academic-homepage) Jekyll template by Shitong Luo,
released under the MIT License (see [`LICENSE`](LICENSE)). It has since been substantially redesigned.

---

© Murtaza Hussain · [Website](https://murtazaabidi1.github.io/) · [GitHub](https://github.com/Murtazaabidi1) · [Google Scholar](https://scholar.google.com/citations?user=bnPVocQAAAAJ&hl=en) · [LinkedIn](https://www.linkedin.com/in/murtazahussain0/)
