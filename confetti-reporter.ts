import terminalImage from 'terminal-image';

let allPassed = true;
let tapOutput = '';

process.stdin.setEncoding('utf8');
process.stdin.on('data', (chunk) => {
  tapOutput += chunk;
  // If any line starts with 'not ok', a test failed
  if (/^not ok/m.test(chunk)) {
    allPassed = false;
  }
});

process.stdin.on('end', async () => {
  process.stdout.write(tapOutput);
  if (allPassed) {
    console.log('\n🎉 ALL TESTS PASSED! 🎉');
    try {
      console.log(await terminalImage.file('confetti.png', { width: '50%' }));
    } catch (e) {
      console.log('(Confetti image missing or failed to load)');
    }
  }
}); 