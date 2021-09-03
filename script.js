// Old MacDonald
const verses = [
  { animal: 'cow', sound: 'moo' },
  { animal: 'pig', sound: 'oink' },
  { animal: 'duck', sound: 'quack' }

]

for (const verse of verses) {
  for (let i = 0; i < 1; i++) {
    console.log(`Old MACDONALD had a farm`)
    console.log(`E - I - E - I - O`)
    console.log(`And on his farm he had a ${verse.animal}`)
    console.log(`E - I - E - I - O`)
    console.log(`With a ${verse.sound} ${verse.sound} here`)
    console.log(`And a ${verse.sound} ${verse.sound} there`)
    console.log(`Here a ${verse.sound} , there a ${verse.sound}`)
    console.log(`Everywhere a ${verse.sound} ${verse.sound}`)
    console.log(`Old MacDonald had a farm`)
    console.log(`E - I - E - I - O`)
    console.log(``)
  }
}

// Bingo Song
const words = ['B', 'I', 'N', 'G', 'O']
for (let i = 0; i <= 5; i++) {
  console.log(`There was a farmer who had a dog,`)
  console.log(`And Bingo was his name-o.`)

  for (let j = 0; j < 3; j++) {
    if (i === 1) {
      words[0] = '(clap)'
      console.log(words.join('-'))
    } else if (i === 2) {
      words[1] = '(clap)'
      console.log(words.join('-'))
    } else if (i === 3) {
      words[2] = '(clap)'
      console.log(words.join('-'))
    } else if (i === 4) {
      words[3] = '(clap)'
      console.log(words.join('-'))
    } else if (i === 5) {
      words[4] = '(clap)'
      console.log(words.join('-'))
    } else {
      console.log(words.join('-'))
    }
  }
  console.log(`And Bingo was his name-o.`)
  console.log(``)
}

// 5 Little Ducks

for (let j = 5; j >= 0; j--) {
  if (j === 1) {
    console.log(j + ` little duck went out one day..`)
  } else if (j === 0) {
    console.log(`Sad mother duck went out one day..`)
  } else {
    console.log(j + ` little ducks went out one day..`)
  }
  console.log(`Over the hills and far away`)
  console.log(`Mother duck said “Quack, quack, quack, quack”`)

  if (j - 1 === 1) {
    console.log(`But only ` + (j - 1) + ` little duck came back.`)
  } else if (j - 1 === 0) {
    console.log(`But none of the five little ducks came back.`)
  } else if (j - 1 < 0) {
    console.log(`And all of the five little ducks came back.`)
  } else { console.log(`But only ` + (j - 1) + ` little ducks came back.`) }
  console.log(``)
}
