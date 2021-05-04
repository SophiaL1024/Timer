const args = process.argv.slice(2)
for (t of args) {
  if (t > 0 && !isNaN(t)) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, t * 1000);
  }
}