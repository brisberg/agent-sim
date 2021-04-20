# Sim Design

Fairly simplistic simluation. Based on a grid of locations, and a set of agents. These agents can have behavior rules, internal state, etc. Locations can have different features and states. Each run of the simulation all agents are activated to take some action on their environment.

## What is an Agent?

Reading https://en.wikipedia.org/wiki/Multi-agent_system

It seems like an agent can actually be anything in system, including passive agents. This means that a better way to represent things like "terrain features" may be to make them passive agents. These agents will simply exist, or slowly change (such as forests regrowing).

The environment may simply be a virtual address space of cells, with some rules for contiguity.
