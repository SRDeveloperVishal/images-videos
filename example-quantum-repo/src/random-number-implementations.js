/**
 * Random Number Generation Examples
 * Demonstrates various entropy sources for QCBOM detection
 */

// 1. Browser Crypto API - CSPRNG (Cryptographically Secure)
const generateSecureRandom = () => {
    const array = new Uint8Array(32);
    crypto.getRandomValues(array);  // Uses OS entropy pool
    return array;
};

// 2. Node.js Crypto - CSPRNG
const crypto = require('crypto');

const generateNodeRandom = () => {
    return crypto.randomBytes(32);  // Cryptographically secure
};

// 3. Math.random - PRNG (NOT secure)
const generateMathRandom = () => {
    const array = new Uint8Array(32);
    for (let i = 0; i < array.length; i++) {
        array[i] = Math.floor(Math.random() * 256);  // Predictable PRNG
    }
    return array;
};

// 4. Quantum Random Number Generator (Simulated)
class QuantumRandomGenerator {
    constructor() {
        this.source = "QRNG";
        this.hardware = "ID Quantique Quantis";
        this.nistValidated = true;
    }
    
    generate(bytes) {
        // In real implementation, this would call QRNG hardware
        // For demo, using crypto API but marking as QRNG
        const quantumData = crypto.randomBytes(bytes);
        
        // Add metadata to indicate quantum source
        quantumData.entropySource = "QRNG";
        quantumData.nistTestPassed = true;
        quantumData.entropyQuality = "Excellent";
        
        return quantumData;
    }
}

// 5. True Random Number Generator (Hardware)
class TrueRandomGenerator {
    constructor() {
        this.source = "TRNG";
        this.hardware = "Intel RDRAND";
    }
    
    generateTrueRandom(size) {
        // Would use hardware TRNG like Intel RDRAND
        // Simulated here with crypto API
        const trngData = crypto.randomBytes(size);
        trngData.entropySource = "TRNG";
        return trngData;
    }
}

// 6. Hybrid Random (QRNG + PRNG)
class HybridRandomGenerator {
    constructor() {
        this.qrng = new QuantumRandomGenerator();
        this.entropySource = "HYBRID";
    }
    
    generateHybrid(bytes) {
        // Mix quantum entropy with PRNG
        const quantumSeed = this.qrng.generate(32);
        const prng = crypto.createHash('sha256');
        prng.update(quantumSeed);
        
        return {
            data: prng.digest(),
            entropySource: "HYBRID_QRNG_PRNG",
            quantumSeeded: true
        };
    }
}

// 7. QKD Integration Example
class QuantumKeyDistribution {
    constructor() {
        this.protocol = "BB84";
        this.qrng = new QuantumRandomGenerator();
    }
    
    generateQuantumBasis() {
        // Use QRNG for basis selection
        const basisData = this.qrng.generate(128);
        return {
            basis: basisData,
            protocol: "BB84",
            entropySource: "QRNG",
            qkdEnabled: true
        };
    }
}

// 8. Entropy Pool Manager
class EntropyPoolManager {
    constructor() {
        this.sources = {
            qrng: new QuantumRandomGenerator(),
            trng: new TrueRandomGenerator(),
            csprng: crypto
        };
    }
    
    getEntropy(source = "QRNG", bytes = 32) {
        switch(source) {
            case "QRNG":
                return this.sources.qrng.generate(bytes);
            case "TRNG":
                return this.sources.trng.generateTrueRandom(bytes);
            case "CSPRNG":
                return crypto.randomBytes(bytes);
            default:
                throw new Error("Unknown entropy source");
        }
    }
    
    validateEntropy(data) {
        // Simulated NIST SP 800-22 tests
        return {
            frequencyTest: "PASS",
            runsTest: "PASS",
            entropyEstimate: 7.95,
            nistCompliant: true
        };
    }
}

// Usage Examples
const demonstrateRandomSources = () => {
    console.log("=== Random Number Generation Demo ===");
    
    // 1. Secure random (CSPRNG)
    const secureRandom = generateNodeRandom();
    console.log("CSPRNG:", secureRandom.toString('hex').substring(0, 32) + "...");
    
    // 2. Quantum random (QRNG)
    const qrng = new QuantumRandomGenerator();
    const quantumRandom = qrng.generate(32);
    console.log("QRNG:", quantumRandom.toString('hex').substring(0, 32) + "...");
    console.log("Entropy Source:", quantumRandom.entropySource);
    console.log("NIST Validated:", quantumRandom.nistTestPassed);
    
    // 3. True random (TRNG)
    const trng = new TrueRandomGenerator();
    const trueRandom = trng.generateTrueRandom(32);
    console.log("TRNG:", trueRandom.toString('hex').substring(0, 32) + "...");
    
    // 4. Hybrid random
    const hybrid = new HybridRandomGenerator();
    const hybridRandom = hybrid.generateHybrid(32);
    console.log("Hybrid:", hybridRandom.data.toString('hex').substring(0, 32) + "...");
    
    // 5. QKD with QRNG
    const qkd = new QuantumKeyDistribution();
    const qkdBasis = qkd.generateQuantumBasis();
    console.log("QKD Protocol:", qkdBasis.protocol);
    console.log("QKD Entropy:", qkdBasis.entropySource);
    
    // 6. Entropy validation
    const entropyManager = new EntropyPoolManager();
    const testData = entropyManager.getEntropy("QRNG", 1024);
    const validation = entropyManager.validateEntropy(testData);
    console.log("NIST Tests:", validation);
};

// Export for use in other modules
module.exports = {
    QuantumRandomGenerator,
    TrueRandomGenerator,
    HybridRandomGenerator,
    QuantumKeyDistribution,
    EntropyPoolManager,
    generateSecureRandom,
    generateNodeRandom
};

// Run demo if called directly
if (require.main === module) {
    demonstrateRandomSources();
}