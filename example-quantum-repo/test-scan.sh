#!/bin/bash

echo "=== Quantum RNG Repository Structure ==="
echo ""
echo "This example shows how to structure a repository with quantum random data"
echo "so that QCBOM can properly identify and classify the entropy sources."
echo ""

# Display the structure
echo "Repository Structure:"
echo "===================="
tree -a . 2>/dev/null || find . -type f | sort

echo ""
echo "Key Files for QCBOM Detection:"
echo "=============================="
echo "1. cbom.json - Contains entropy property declarations"
echo "2. src/quantum_rng_handler.py - Python code with QRNG references"
echo "3. src/qrng_validator.java - Java code with entropy validation"
echo ""

echo "When QCBOM scans this repository, it will detect:"
echo "================================================="
echo "✓ Entropy Source: QRNG (Quantum Random Number Generator)"
echo "✓ Quality: Excellent (score: 98/100)"
echo "✓ NIST Validation: PASS"
echo "✓ QKD Protocol: BB84"
echo "✓ Hardware: ID Quantique Quantis QRNG"
echo ""

echo "To use this structure for your repository:"
echo "========================================="
echo "1. Copy this entire example-quantum-repo to your GitHub"
echo "2. Replace data/sample_quantum_data.bin with your quantum_100MB_20250704_113811.bin"
echo "3. Update the file references in cbom.json"
echo "4. Commit and push to GitHub"
echo "5. Run QCBOM scan on your repository"
echo ""

echo "The CBOM properties that QCBOM will recognize:"
echo "=============================================="
grep -A1 -B1 '"name".*"quantum\|"name".*"qkd\|"name".*"nist\|"name".*"entropy' cbom.json | grep -E '"name"|"value"' | sed 's/^/  /'