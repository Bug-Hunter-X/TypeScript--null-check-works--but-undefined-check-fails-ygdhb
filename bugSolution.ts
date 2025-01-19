function printName(name: string | null | undefined): void {
  if (name) {
    console.log(name.toUpperCase());
  } else {
    console.log('No name provided');
  }
}

printName(null); // Works fine
printName(undefined); // Works fine