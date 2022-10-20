function rot13(str) {
  const A = 65;
  const ROT = 13;

  return (
    str
      .split('')
      // find all capital letters, convert to numbers 0-25
      .map(ltr => (ltr.match(/[A-Z]/) ? ltr.charCodeAt(0) - A : ltr))
      // shift the letters
      .map(ltr =>
        typeof ltr === 'number' && ltr < 26 ? (ltr + ROT) % 26 : ltr
      )
      // convert numbers of letters back to letters
      .map(ltr =>
        typeof ltr === 'number' && ltr < 26 ? String.fromCharCode(ltr + A) : ltr
      )
      .join('')
  );
}
rot13('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
rot13('SERR PBQR PNZC');
rot13('SERR CVMMN!');
