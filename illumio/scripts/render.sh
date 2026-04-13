#!/bin/bash

# A quick script to simulate the local build process
echo "Starting local docs build..."

# 1. Clear old output
rm -rf output/*

# 2. Render diagrams (Requires mmdc installed locally)
# mmdc -i content/diagrams/traffic-flow.mmd -o output/traffic-flow.png

echo "Build complete. Check /output for results."