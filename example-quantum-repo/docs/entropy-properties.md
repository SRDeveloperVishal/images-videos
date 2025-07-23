# Entropy Properties Documentation

## Quantum Random Number Generator (QRNG)

This project uses a true Quantum Random Number Generator for cryptographic entropy.

### Properties in CBOM

| Property | Value | Description |
|----------|-------|-------------|
| `quantum.random.source` | QRNG | Quantum Random Number Generator |
| `quantum.random.hardware` | ID Quantique Quantis | Hardware QRNG device |
| `nist.test.800-22.result` | Pass | NIST randomness test result |
| `entropy.quality.classification` | Excellent | Overall entropy quality |
| `entropy.quality.score` | 98 | Quality score (0-100) |
| `entropy.rate` | 16 Mbps | Data generation rate |

### QKD Properties

| Property | Value | Description |
|----------|-------|-------------|
| `qkd.protocol` | BB84 | Bennett-Brassard 1984 protocol |
| `qkd.hardware.photon.source` | Single Photon | Photon source type |
| `qkd.hardware.receiver` | APD | Avalanche Photodiode detector |

## Verification

The quantum random data has been validated using:

1. **NIST SP 800-22 Test Suite**
   - Frequency Test: PASS
   - Runs Test: PASS
   - Entropy Estimation: 7.99 bits/byte

2. **Chi-Square Test**
   - Uniform distribution verified
   - No statistical bias detected

3. **Autocorrelation Analysis**
   - No patterns detected
   - True randomness confirmed

## Usage in QCBOM

When QCBOM scans this repository, it will:

1. Parse the `cbom.json` file
2. Identify QRNG entropy sources
3. Validate quantum properties
4. Assign "Excellent" quality rating
5. Show quantum-safe compliance