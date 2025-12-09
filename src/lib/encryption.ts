import nacl from "tweetnacl";
import naclUtil from "tweetnacl-util";

/**
 * Generate a new keypair for public/private encryption.
 */
export function generateKeypair() {
  return nacl.box.keyPair();
}

/**
 * Encrypt a message with recipient's public key and sender's private key.
 * Uses NaCl's box (public‑key authenticated encryption).
 */
export function encryptMessage(
  message: string,
  recipientPublicKey: Uint8Array,
  senderSecretKey: Uint8Array
): { cipher: Uint8Array; nonce: Uint8Array } {
  const nonce = nacl.randomBytes(nacl.box.nonceLength);
  const messageUint8 = naclUtil.decodeUTF8(message);

  const cipher = nacl.box(messageUint8, nonce, recipientPublicKey, senderSecretKey);

  return { cipher, nonce };
}

/**
 * Decrypt a message with sender's public key and recipient's private key.
 */
export function decryptMessage(
  cipher: Uint8Array,
  nonce: Uint8Array,
  senderPublicKey: Uint8Array,
  recipientSecretKey: Uint8Array
): string | null {
  const decrypted = nacl.box.open(cipher, nonce, senderPublicKey, recipientSecretKey);

  if (!decrypted) return null;
  return naclUtil.encodeUTF8(decrypted);
}

/**
 * Example usage:
 *
 * const alice = generateKeypair();
 * const bob = generateKeypair();
 *
 * const { cipher, nonce } = encryptMessage("Hello Bob!", bob.publicKey, alice.secretKey);
 * const plain = decryptMessage(cipher, nonce, alice.publicKey, bob.secretKey);
 *
 * console.log(plain); // "Hello Bob!"
 */
