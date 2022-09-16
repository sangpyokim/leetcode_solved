function reverseBits(n) {
  let result = 0;

  for (let i = 0; i < 32; i++) {
    const lastBit = n & 1; // 맨 끝 비트

    // 맨끝으로 비트를 옳김
    const reversedLastBit = lastBit << (31 - i);
    // insert the reversed last bit of n into the result
    result += reversedLastBit;

    // the last bit of n is already taken care of, so we need to drop it
    n >>>= 1;
  }

  // convert the result to an unsigned 32-bit integer
  return result >>> 0;
}