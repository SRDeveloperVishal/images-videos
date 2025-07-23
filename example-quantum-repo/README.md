# Quantum Random Number Generator Project

This repository contains quantum-generated random number data and associated tools.

## Overview

This project provides cryptographically secure random numbers generated using a Quantum Random Number Generator (QRNG). The randomness is derived from quantum mechanical processes, making it fundamentally unpredictable and suitable for high-security applications.

## Contents

- `data/quantum_100MB_20250704_113811.bin` - 100MB of quantum random data
- `src/quantum_rng_handler.py` - Python handler for quantum data
- `src/qrng_validator.java` - Java validation utilities
- `cbom.json` - Cryptographic Bill of Materials

## Entropy Sources

| File | Entropy Type | Quality | NIST SP 800-22 |
|------|--------------|---------|----------------|
| quantum_100MB_20250704_113811.bin | QRNG | Excellent | ✅ Pass |

## Applications

- Cryptographic key generation
- One-time pad generation
- Quantum key distribution (QKD)
- Monte Carlo simulations
- Secure random number seeds

## Compliance

This project maintains a Cryptographic Bill of Materials (CBOM) in CycloneDX format to ensure transparency about our entropy sources and cryptographic implementations.