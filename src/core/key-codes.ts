// these are keycodes, that code for keyCodes to human readable strings

import invert from "lodash/invert";

/** The key code number to the name of the key as a string. */
export const KEY_NAME_TO_CODE = {
    "backspace": 8 as 8,
    "tab": 9 as 9,
    "enter": 13 as 13,
    "shift": 16 as 16,
    "ctrl": 17 as 17,
    "alt": 18 as 18,
    "pause/break": 19 as 19,
    "caps lock": 20 as 20,
    "escape": 27 as 27,
    " ": 32 as 32,
    "space": 32 as 32,
    "page up": 33 as 33,
    "page down": 34 as 34,
    "end": 35 as 35,
    "home": 36 as 36,
    "left arrow": 37 as 37,
    "up arrow": 38 as 38,
    "right arrow": 39 as 39,
    "down arrow": 40 as 40,
    "insert": 45 as 45,
    "delete": 46 as 46,

    "0": 48 as 48,
    "1": 49 as 49,
    "2": 50 as 50,
    "3": 51 as 51,
    "4": 52 as 52,
    "5": 53 as 53,
    "6": 54 as 54,
    "7": 55 as 55,
    "8": 56 as 56,
    "9": 57 as 57,

    ":": 58 as 58,
    ";": 59 as 59,
    "<": 60 as 60,
    "=": 61 as 61,
    ">": 62 as 62,
    "?": 63 as 63,
    "@": 64 as 64,

    "A": 65 as 65,
    "B": 66 as 66,
    "C": 67 as 67,
    "D": 68 as 68,
    "E": 69 as 69,
    "F": 70 as 70,
    "G": 71 as 71,
    "H": 72 as 72,
    "I": 73 as 73,
    "J": 74 as 74,
    "K": 75 as 75,
    "L": 76 as 76,
    "M": 77 as 77,
    "N": 78 as 78,
    "O": 79 as 79,
    "P": 80 as 80,
    "Q": 81 as 81,
    "R": 82 as 82,
    "S": 83 as 83,
    "T": 84 as 84,
    "U": 85 as 85,
    "V": 86 as 86,
    "W": 87 as 87,
    "X": 88 as 88,
    "Y": 89 as 89,
    "Z": 90 as 90,

    "[": 91 as 91,
    "\\": 92 as 92,
    "]": 93 as 93,
    "^": 94 as 94,
    "_": 95 as 95,
    "underscore": 95 as 95,
    "`": 96 as 96,

    "a": 97 as 97,
    "b": 98 as 98,
    "c": 99 as 99,
    "d": 100 as 100,
    "e": 101 as 101,
    "f": 102 as 102,
    "g": 103 as 103,
    "h": 104 as 104,
    "i": 105 as 105,
    "j": 106 as 106,
    "k": 107 as 107,
    "l": 108 as 108,
    "m": 109 as 109,
    "n": 110 as 110,
    "o": 111 as 111,
    "p": 112 as 112,
    "q": 113 as 113,
    "r": 114 as 114,
    "s": 115 as 115,
    "t": 116 as 116,
    "u": 117 as 117,
    "v": 118 as 118,
    "w": 119 as 119,
    "x": 120 as 120,
    "y": 121 as 121,
    "z": 122 as 122,

    "{": 123 as 123,
    "|": 124 as 124,
    "}": 125 as 125,
    "~": 126 as 126,
    "delete2": 127 as 127, // wut

    "f1": 314 as 314,
    "f2": 315 as 315,
    "f3": 316 as 316,
    "f4": 317 as 317,
    "f5": 318 as 318,
    "f6": 319 as 319,
    "f7": 320 as 320,
    "f8": 321 as 321,
    "f9": 322 as 322,
    "f10": 323 as 323,
    "f11": 324 as 324,
    "f12": 325 as 325,
};

export const KEY_CODE_TO_NAME = invert(KEY_NAME_TO_CODE) as {
    [code: number]: string | undefined;
};
