/**
 * Quantum-Safe Cryptography Test File
 * Simple examples to test CBOM detection
 */

// NIST Post-Quantum Standards
const mlKem = require('ml-kem-768');
const mlDsa = require('ml-dsa-65');
const slhDsa = require('slh-dsa-sha2-128s');

// Original PQC algorithm names
const kyber = require('crystals-kyber-768');
const dilithium = require('crystals-dilithium-3');
const falcon = require('falcon-512');
const sphincsPlus = require('sphincs-plus-128s');

// Key encapsulation
function testMLKEM() {
    const keyPair = mlKem.generateKeyPair();
    const encap = mlKem.encapsulate(keyPair.publicKey);
    return mlKem.decapsulate(encap.ciphertext, keyPair.privateKey);
}

// Digital signatures
function testMLDSA(message) {
    const keys = mlDsa.generateKeyPair();
    const signature = mlDsa.sign(message, keys.privateKey);
    return mlDsa.verify(signature, message, keys.publicKey);
}

// Hash-based signatures
function testSLHDSA(data) {
    const keyPair = slhDsa.generateKeyPair();
    const sig = slhDsa.sign(data, keyPair.privateKey);
    return slhDsa.verify(sig, data, keyPair.publicKey);
}

// Legacy algorithm names
function testKyber() {
    const keys = kyber.generateKeyPair();
    return kyber.encapsulate(keys.publicKey);
}

function testDilithium(msg) {
    const keyPair = dilithium.generateKeyPair();
    return dilithium.sign(msg, keyPair.privateKey);
}

function testFalcon(text) {
    const keys = falcon.generateKeyPair();
    return falcon.sign(text, keys.privateKey);
}

function testSPHINCSPlus(payload) {
    const keyPair = sphincsPlus.generateKeyPair();
    return sphincsPlus.sign(payload, keyPair.privateKey);
}

module.exports = {
    testMLKEM,
    testMLDSA, 
    testSLHDSA,
    testKyber,
    testDilithium,
    testFalcon,
    testSPHINCSPlus
};