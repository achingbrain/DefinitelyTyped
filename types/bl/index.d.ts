// Type definitions for BufferList v5.0
// Project: https://github.com/rvagg/bl
// Definitions by: Bart van der Schoor <https://github.com/Bartvds>
//                 Francis Gulotta <https://github.com/reconbot>
//                 Ben Allfree <https://github.com/benallfree>
//                 Alex Potsides <https://github.com/achingbrain>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import BufferList = require("./BufferList");
import { Duplex } from "readable-stream";

interface BufferListStream extends Duplex, BufferList {}

declare class BufferListStream {
    constructor(initialData?: Buffer | Buffer[] | BufferList | BufferList[] | string);
    static isBufferList: (b: any) => boolean;
    duplicate: () => BufferListStream;
}

export = BufferListStream;
