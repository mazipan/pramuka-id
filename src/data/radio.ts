export interface RadioSection {
  title: string
  key: string
}
export interface RadioAlphabet {
  code: string
  text: string
}
export interface RadioNumeric {
  code: string
  text: number
}
export interface Radio {
  source: string
  sections: RadioSection[]
  alphabet: RadioAlphabet[]
  number: RadioNumeric[]
}

const data: Radio = {
  source: 'https://id.m.wikipedia.org/wiki/Alfabet_fonetik_NATO',
  sections: [
    {
      title: 'Huruf',
      key: 'alphabet'
    },
    {
      title: 'Angka',
      key: 'number'
    }
  ],
  alphabet: [
    {
      code: 'ALPHA',
      text: 'A'
    },
    {
      code: 'BRAVO',
      text: 'B'
    },
    {
      code: 'CHARLIE',
      text: 'C'
    },
    {
      code: 'DELTA',
      text: 'D'
    },
    {
      code: 'ECHO',
      text: 'E'
    },
    {
      code: 'FOXTROT',
      text: 'F'
    },
    {
      code: 'GOLF',
      text: 'G'
    },
    {
      code: 'HOTEL',
      text: 'H'
    },
    {
      code: 'INDIA',
      text: 'I'
    },
    {
      code: 'JULIETT',
      text: 'J'
    },
    {
      code: 'KILO',
      text: 'K'
    },
    {
      code: 'LIMA',
      text: 'L'
    },
    {
      code: 'MIKE',
      text: 'M'
    },
    {
      code: 'NOVEMBER',
      text: 'N'
    },
    {
      code: 'OSCAR',
      text: 'O'
    },
    {
      code: 'PAPA',
      text: 'P'
    },
    {
      code: 'QUEBEC',
      text: 'Q'
    },
    {
      code: 'ROMEO',
      text: 'R'
    },
    {
      code: 'SIERRA',
      text: 'S'
    },
    {
      code: 'TANGO',
      text: 'T'
    },
    {
      code: 'UNIFORM',
      text: 'U'
    },
    {
      code: 'VICTOR',
      text: 'V'
    },
    {
      code: 'WHISKEY',
      text: 'W'
    },
    {
      code: 'XRAY',
      text: 'X'
    },
    {
      code: 'YANKEE',
      text: 'Y'
    },
    {
      code: 'ZULU',
      text: 'Z'
    }
  ],
  number: [
    {
      code: 'ONE',
      text: 1
    },
    {
      code: 'TWO',
      text: 2
    },
    {
      code: 'THREE',
      text: 3
    },
    {
      code: 'FOUR',
      text: 4
    },
    {
      code: 'FIVE',
      text: 5
    },
    {
      code: 'SIX',
      text: 6
    },
    {
      code: 'SEVEN',
      text: 7
    },
    {
      code: 'EIGHT',
      text: 8
    },
    {
      code: 'NINE',
      text: 9
    },
    {
      code: 'ZERO',
      text: 0
    }
  ]
}

export default data
