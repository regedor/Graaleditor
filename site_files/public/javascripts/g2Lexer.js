// $ANTLR 3.2 Sep 23, 2009 12:02:23 g2.g 2010-07-05 02:06:26

var g2Lexer = function(input, state) {
// alternate constructor @todo
// public g2Lexer(CharStream input)
// public g2Lexer(CharStream input, RecognizerSharedState state) {
    if (!state) {
        state = new org.antlr.runtime.RecognizerSharedState();
    }

    (function(){
    }).call(this);

    g2Lexer.superclass.constructor.call(this, input, state);


};

org.antlr.lang.augmentObject(g2Lexer, {
    T__18: 18,
    STRING: 6,
    T__17: 17,
    T__16: 16,
    T__15: 15,
    T__14: 14,
    T__13: 13,
    T__12: 12,
    ID: 4,
    T__21: 21,
    T__20: 20,
    EOF: -1,
    OCTAL_ESC: 10,
    ESC_SEQ: 7,
    UNICODE_ESC: 9,
    ID_TERMINAL: 5,
    WS: 11,
    HEX_DIGIT: 8,
    T__19: 19
});

(function(){
var HIDDEN = org.antlr.runtime.Token.HIDDEN_CHANNEL,
    EOF = org.antlr.runtime.Token.EOF;
org.antlr.lang.extend(g2Lexer, org.antlr.runtime.Lexer, {
    T__18 : 18,
    STRING : 6,
    T__17 : 17,
    T__16 : 16,
    T__15 : 15,
    T__14 : 14,
    T__13 : 13,
    T__12 : 12,
    ID : 4,
    T__21 : 21,
    T__20 : 20,
    EOF : -1,
    OCTAL_ESC : 10,
    ESC_SEQ : 7,
    UNICODE_ESC : 9,
    ID_TERMINAL : 5,
    WS : 11,
    HEX_DIGIT : 8,
    T__19 : 19,
    getGrammarFileName: function() { return "g2.g"; }
});
org.antlr.lang.augmentObject(g2Lexer.prototype, {
    // $ANTLR start T__12
    mT__12: function()  {
        try {
            var _type = this.T__12;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // g2.g:7:7: ( ':' )
            // g2.g:7:9: ':'
            this.match(':'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__12",

    // $ANTLR start T__13
    mT__13: function()  {
        try {
            var _type = this.T__13;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // g2.g:8:7: ( ';' )
            // g2.g:8:9: ';'
            this.match(';'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__13",

    // $ANTLR start T__14
    mT__14: function()  {
        try {
            var _type = this.T__14;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // g2.g:9:7: ( '|' )
            // g2.g:9:9: '|'
            this.match('|'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__14",

    // $ANTLR start T__15
    mT__15: function()  {
        try {
            var _type = this.T__15;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // g2.g:10:7: ( '~' )
            // g2.g:10:9: '~'
            this.match('~'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__15",

    // $ANTLR start T__16
    mT__16: function()  {
        try {
            var _type = this.T__16;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // g2.g:11:7: ( '(' )
            // g2.g:11:9: '('
            this.match('('); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__16",

    // $ANTLR start T__17
    mT__17: function()  {
        try {
            var _type = this.T__17;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // g2.g:12:7: ( ')' )
            // g2.g:12:9: ')'
            this.match(')'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__17",

    // $ANTLR start T__18
    mT__18: function()  {
        try {
            var _type = this.T__18;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // g2.g:13:7: ( '*' )
            // g2.g:13:9: '*'
            this.match('*'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__18",

    // $ANTLR start T__19
    mT__19: function()  {
        try {
            var _type = this.T__19;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // g2.g:14:7: ( '+' )
            // g2.g:14:9: '+'
            this.match('+'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__19",

    // $ANTLR start T__20
    mT__20: function()  {
        try {
            var _type = this.T__20;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // g2.g:15:7: ( '?' )
            // g2.g:15:9: '?'
            this.match('?'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__20",

    // $ANTLR start T__21
    mT__21: function()  {
        try {
            var _type = this.T__21;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // g2.g:16:7: ( '..' )
            // g2.g:16:9: '..'
            this.match(".."); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__21",

    // $ANTLR start ID
    mID: function()  {
        try {
            var _type = this.ID;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // g2.g:123:3: ( ( 'a' .. 'z' | '_' ) ( 'a' .. 'z' | 'A' .. 'Z' | '0' .. '9' | '_' )* )
            // g2.g:123:5: ( 'a' .. 'z' | '_' ) ( 'a' .. 'z' | 'A' .. 'Z' | '0' .. '9' | '_' )*
            if ( this.input.LA(1)=='_'||(this.input.LA(1)>='a' && this.input.LA(1)<='z') ) {
                this.input.consume();

            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}

            // g2.g:123:20: ( 'a' .. 'z' | 'A' .. 'Z' | '0' .. '9' | '_' )*
            loop1:
            do {
                var alt1=2;
                var LA1_0 = this.input.LA(1);

                if ( ((LA1_0>='0' && LA1_0<='9')||(LA1_0>='A' && LA1_0<='Z')||LA1_0=='_'||(LA1_0>='a' && LA1_0<='z')) ) {
                    alt1=1;
                }


                switch (alt1) {
                case 1 :
                    // g2.g:
                    if ( (this.input.LA(1)>='0' && this.input.LA(1)<='9')||(this.input.LA(1)>='A' && this.input.LA(1)<='Z')||this.input.LA(1)=='_'||(this.input.LA(1)>='a' && this.input.LA(1)<='z') ) {
                        this.input.consume();

                    }
                    else {
                        var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                        this.recover(mse);
                        throw mse;}



                    break;

                default :
                    break loop1;
                }
            } while (true);




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "ID",

    // $ANTLR start ID_TERMINAL
    mID_TERMINAL: function()  {
        try {
            var _type = this.ID_TERMINAL;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // g2.g:128:3: ( ( 'A' .. 'Z' ) ( 'a' .. 'z' | 'A' .. 'Z' | '0' .. '9' | '_' )* )
            // g2.g:128:5: ( 'A' .. 'Z' ) ( 'a' .. 'z' | 'A' .. 'Z' | '0' .. '9' | '_' )*
            // g2.g:128:5: ( 'A' .. 'Z' )
            // g2.g:128:6: 'A' .. 'Z'
            this.matchRange('A','Z'); 



            // g2.g:128:16: ( 'a' .. 'z' | 'A' .. 'Z' | '0' .. '9' | '_' )*
            loop2:
            do {
                var alt2=2;
                var LA2_0 = this.input.LA(1);

                if ( ((LA2_0>='0' && LA2_0<='9')||(LA2_0>='A' && LA2_0<='Z')||LA2_0=='_'||(LA2_0>='a' && LA2_0<='z')) ) {
                    alt2=1;
                }


                switch (alt2) {
                case 1 :
                    // g2.g:
                    if ( (this.input.LA(1)>='0' && this.input.LA(1)<='9')||(this.input.LA(1)>='A' && this.input.LA(1)<='Z')||this.input.LA(1)=='_'||(this.input.LA(1)>='a' && this.input.LA(1)<='z') ) {
                        this.input.consume();

                    }
                    else {
                        var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                        this.recover(mse);
                        throw mse;}



                    break;

                default :
                    break loop2;
                }
            } while (true);




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "ID_TERMINAL",

    // $ANTLR start STRING
    mSTRING: function()  {
        try {
            var _type = this.STRING;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // g2.g:132:5: ( '\"' ( ESC_SEQ | ~ ( '\\\\' | '\"' ) )* '\"' | '\\'' ( ESC_SEQ | ~ ( '\\\\' | '\\'' ) )* '\\'' )
            var alt5=2;
            var LA5_0 = this.input.LA(1);

            if ( (LA5_0=='\"') ) {
                alt5=1;
            }
            else if ( (LA5_0=='\'') ) {
                alt5=2;
            }
            else {
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 5, 0, this.input);

                throw nvae;
            }
            switch (alt5) {
                case 1 :
                    // g2.g:132:8: '\"' ( ESC_SEQ | ~ ( '\\\\' | '\"' ) )* '\"'
                    this.match('\"'); 
                    // g2.g:132:12: ( ESC_SEQ | ~ ( '\\\\' | '\"' ) )*
                    loop3:
                    do {
                        var alt3=3;
                        var LA3_0 = this.input.LA(1);

                        if ( (LA3_0=='\\') ) {
                            alt3=1;
                        }
                        else if ( ((LA3_0>='\u0000' && LA3_0<='!')||(LA3_0>='#' && LA3_0<='[')||(LA3_0>=']' && LA3_0<='\uFFFF')) ) {
                            alt3=2;
                        }


                        switch (alt3) {
                        case 1 :
                            // g2.g:132:14: ESC_SEQ
                            this.mESC_SEQ(); 


                            break;
                        case 2 :
                            // g2.g:132:24: ~ ( '\\\\' | '\"' )
                            if ( (this.input.LA(1)>='\u0000' && this.input.LA(1)<='!')||(this.input.LA(1)>='#' && this.input.LA(1)<='[')||(this.input.LA(1)>=']' && this.input.LA(1)<='\uFFFF') ) {
                                this.input.consume();

                            }
                            else {
                                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                                this.recover(mse);
                                throw mse;}



                            break;

                        default :
                            break loop3;
                        }
                    } while (true);

                    this.match('\"'); 


                    break;
                case 2 :
                    // g2.g:133:4: '\\'' ( ESC_SEQ | ~ ( '\\\\' | '\\'' ) )* '\\''
                    this.match('\''); 
                    // g2.g:133:9: ( ESC_SEQ | ~ ( '\\\\' | '\\'' ) )*
                    loop4:
                    do {
                        var alt4=3;
                        var LA4_0 = this.input.LA(1);

                        if ( (LA4_0=='\\') ) {
                            alt4=1;
                        }
                        else if ( ((LA4_0>='\u0000' && LA4_0<='&')||(LA4_0>='(' && LA4_0<='[')||(LA4_0>=']' && LA4_0<='\uFFFF')) ) {
                            alt4=2;
                        }


                        switch (alt4) {
                        case 1 :
                            // g2.g:133:11: ESC_SEQ
                            this.mESC_SEQ(); 


                            break;
                        case 2 :
                            // g2.g:133:21: ~ ( '\\\\' | '\\'' )
                            if ( (this.input.LA(1)>='\u0000' && this.input.LA(1)<='&')||(this.input.LA(1)>='(' && this.input.LA(1)<='[')||(this.input.LA(1)>=']' && this.input.LA(1)<='\uFFFF') ) {
                                this.input.consume();

                            }
                            else {
                                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                                this.recover(mse);
                                throw mse;}



                            break;

                        default :
                            break loop4;
                        }
                    } while (true);

                    this.match('\''); 


                    break;

            }
            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "STRING",

    // $ANTLR start HEX_DIGIT
    mHEX_DIGIT: function()  {
        try {
            // g2.g:137:11: ( ( '0' .. '9' | 'a' .. 'f' | 'A' .. 'F' ) )
            // g2.g:137:13: ( '0' .. '9' | 'a' .. 'f' | 'A' .. 'F' )
            if ( (this.input.LA(1)>='0' && this.input.LA(1)<='9')||(this.input.LA(1)>='A' && this.input.LA(1)<='F')||(this.input.LA(1)>='a' && this.input.LA(1)<='f') ) {
                this.input.consume();

            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}




        }
        finally {
        }
    },
    // $ANTLR end "HEX_DIGIT",

    // $ANTLR start ESC_SEQ
    mESC_SEQ: function()  {
        try {
            // g2.g:141:5: ( '\\\\' ( 'b' | 't' | 'n' | 'f' | 'r' | '\\\"' | '\\'' | '\\\\' ) | UNICODE_ESC | OCTAL_ESC )
            var alt6=3;
            var LA6_0 = this.input.LA(1);

            if ( (LA6_0=='\\') ) {
                switch ( this.input.LA(2) ) {
                case '\"':
                case '\'':
                case '\\':
                case 'b':
                case 'f':
                case 'n':
                case 'r':
                case 't':
                    alt6=1;
                    break;
                case 'u':
                    alt6=2;
                    break;
                case '0':
                case '1':
                case '2':
                case '3':
                case '4':
                case '5':
                case '6':
                case '7':
                    alt6=3;
                    break;
                default:
                    var nvae =
                        new org.antlr.runtime.NoViableAltException("", 6, 1, this.input);

                    throw nvae;
                }

            }
            else {
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 6, 0, this.input);

                throw nvae;
            }
            switch (alt6) {
                case 1 :
                    // g2.g:141:9: '\\\\' ( 'b' | 't' | 'n' | 'f' | 'r' | '\\\"' | '\\'' | '\\\\' )
                    this.match('\\'); 
                    if ( this.input.LA(1)=='\"'||this.input.LA(1)=='\''||this.input.LA(1)=='\\'||this.input.LA(1)=='b'||this.input.LA(1)=='f'||this.input.LA(1)=='n'||this.input.LA(1)=='r'||this.input.LA(1)=='t' ) {
                        this.input.consume();

                    }
                    else {
                        var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                        this.recover(mse);
                        throw mse;}



                    break;
                case 2 :
                    // g2.g:142:9: UNICODE_ESC
                    this.mUNICODE_ESC(); 


                    break;
                case 3 :
                    // g2.g:143:9: OCTAL_ESC
                    this.mOCTAL_ESC(); 


                    break;

            }
        }
        finally {
        }
    },
    // $ANTLR end "ESC_SEQ",

    // $ANTLR start OCTAL_ESC
    mOCTAL_ESC: function()  {
        try {
            // g2.g:148:5: ( '\\\\' ( '0' .. '3' ) ( '0' .. '7' ) ( '0' .. '7' ) | '\\\\' ( '0' .. '7' ) ( '0' .. '7' ) | '\\\\' ( '0' .. '7' ) )
            var alt7=3;
            var LA7_0 = this.input.LA(1);

            if ( (LA7_0=='\\') ) {
                var LA7_1 = this.input.LA(2);

                if ( ((LA7_1>='0' && LA7_1<='3')) ) {
                    var LA7_2 = this.input.LA(3);

                    if ( ((LA7_2>='0' && LA7_2<='7')) ) {
                        var LA7_4 = this.input.LA(4);

                        if ( ((LA7_4>='0' && LA7_4<='7')) ) {
                            alt7=1;
                        }
                        else {
                            alt7=2;}
                    }
                    else {
                        alt7=3;}
                }
                else if ( ((LA7_1>='4' && LA7_1<='7')) ) {
                    var LA7_3 = this.input.LA(3);

                    if ( ((LA7_3>='0' && LA7_3<='7')) ) {
                        alt7=2;
                    }
                    else {
                        alt7=3;}
                }
                else {
                    var nvae =
                        new org.antlr.runtime.NoViableAltException("", 7, 1, this.input);

                    throw nvae;
                }
            }
            else {
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 7, 0, this.input);

                throw nvae;
            }
            switch (alt7) {
                case 1 :
                    // g2.g:148:9: '\\\\' ( '0' .. '3' ) ( '0' .. '7' ) ( '0' .. '7' )
                    this.match('\\'); 
                    // g2.g:148:14: ( '0' .. '3' )
                    // g2.g:148:15: '0' .. '3'
                    this.matchRange('0','3'); 



                    // g2.g:148:25: ( '0' .. '7' )
                    // g2.g:148:26: '0' .. '7'
                    this.matchRange('0','7'); 



                    // g2.g:148:36: ( '0' .. '7' )
                    // g2.g:148:37: '0' .. '7'
                    this.matchRange('0','7'); 





                    break;
                case 2 :
                    // g2.g:149:9: '\\\\' ( '0' .. '7' ) ( '0' .. '7' )
                    this.match('\\'); 
                    // g2.g:149:14: ( '0' .. '7' )
                    // g2.g:149:15: '0' .. '7'
                    this.matchRange('0','7'); 



                    // g2.g:149:25: ( '0' .. '7' )
                    // g2.g:149:26: '0' .. '7'
                    this.matchRange('0','7'); 





                    break;
                case 3 :
                    // g2.g:150:9: '\\\\' ( '0' .. '7' )
                    this.match('\\'); 
                    // g2.g:150:14: ( '0' .. '7' )
                    // g2.g:150:15: '0' .. '7'
                    this.matchRange('0','7'); 





                    break;

            }
        }
        finally {
        }
    },
    // $ANTLR end "OCTAL_ESC",

    // $ANTLR start UNICODE_ESC
    mUNICODE_ESC: function()  {
        try {
            // g2.g:155:5: ( '\\\\' 'u' HEX_DIGIT HEX_DIGIT HEX_DIGIT HEX_DIGIT )
            // g2.g:155:9: '\\\\' 'u' HEX_DIGIT HEX_DIGIT HEX_DIGIT HEX_DIGIT
            this.match('\\'); 
            this.match('u'); 
            this.mHEX_DIGIT(); 
            this.mHEX_DIGIT(); 
            this.mHEX_DIGIT(); 
            this.mHEX_DIGIT(); 



        }
        finally {
        }
    },
    // $ANTLR end "UNICODE_ESC",

    // $ANTLR start WS
    mWS: function()  {
        try {
            var _type = this.WS;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // g2.g:159:5: ( ( ' ' | '\\t' | '\\r' | '\\n' ) )
            // g2.g:159:9: ( ' ' | '\\t' | '\\r' | '\\n' )
            if ( (this.input.LA(1)>='\t' && this.input.LA(1)<='\n')||this.input.LA(1)=='\r'||this.input.LA(1)==' ' ) {
                this.input.consume();

            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}

            _channel=HIDDEN;



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "WS",

    mTokens: function() {
        // g2.g:1:8: ( T__12 | T__13 | T__14 | T__15 | T__16 | T__17 | T__18 | T__19 | T__20 | T__21 | ID | ID_TERMINAL | STRING | WS )
        var alt8=14;
        switch ( this.input.LA(1) ) {
        case ':':
            alt8=1;
            break;
        case ';':
            alt8=2;
            break;
        case '|':
            alt8=3;
            break;
        case '~':
            alt8=4;
            break;
        case '(':
            alt8=5;
            break;
        case ')':
            alt8=6;
            break;
        case '*':
            alt8=7;
            break;
        case '+':
            alt8=8;
            break;
        case '?':
            alt8=9;
            break;
        case '.':
            alt8=10;
            break;
        case '_':
        case 'a':
        case 'b':
        case 'c':
        case 'd':
        case 'e':
        case 'f':
        case 'g':
        case 'h':
        case 'i':
        case 'j':
        case 'k':
        case 'l':
        case 'm':
        case 'n':
        case 'o':
        case 'p':
        case 'q':
        case 'r':
        case 's':
        case 't':
        case 'u':
        case 'v':
        case 'w':
        case 'x':
        case 'y':
        case 'z':
            alt8=11;
            break;
        case 'A':
        case 'B':
        case 'C':
        case 'D':
        case 'E':
        case 'F':
        case 'G':
        case 'H':
        case 'I':
        case 'J':
        case 'K':
        case 'L':
        case 'M':
        case 'N':
        case 'O':
        case 'P':
        case 'Q':
        case 'R':
        case 'S':
        case 'T':
        case 'U':
        case 'V':
        case 'W':
        case 'X':
        case 'Y':
        case 'Z':
            alt8=12;
            break;
        case '\"':
        case '\'':
            alt8=13;
            break;
        case '\t':
        case '\n':
        case '\r':
        case ' ':
            alt8=14;
            break;
        default:
            var nvae =
                new org.antlr.runtime.NoViableAltException("", 8, 0, this.input);

            throw nvae;
        }

        switch (alt8) {
            case 1 :
                // g2.g:1:10: T__12
                this.mT__12(); 


                break;
            case 2 :
                // g2.g:1:16: T__13
                this.mT__13(); 


                break;
            case 3 :
                // g2.g:1:22: T__14
                this.mT__14(); 


                break;
            case 4 :
                // g2.g:1:28: T__15
                this.mT__15(); 


                break;
            case 5 :
                // g2.g:1:34: T__16
                this.mT__16(); 


                break;
            case 6 :
                // g2.g:1:40: T__17
                this.mT__17(); 


                break;
            case 7 :
                // g2.g:1:46: T__18
                this.mT__18(); 


                break;
            case 8 :
                // g2.g:1:52: T__19
                this.mT__19(); 


                break;
            case 9 :
                // g2.g:1:58: T__20
                this.mT__20(); 


                break;
            case 10 :
                // g2.g:1:64: T__21
                this.mT__21(); 


                break;
            case 11 :
                // g2.g:1:70: ID
                this.mID(); 


                break;
            case 12 :
                // g2.g:1:73: ID_TERMINAL
                this.mID_TERMINAL(); 


                break;
            case 13 :
                // g2.g:1:85: STRING
                this.mSTRING(); 


                break;
            case 14 :
                // g2.g:1:92: WS
                this.mWS(); 


                break;

        }

    }

}, true); // important to pass true to overwrite default implementations

 
})();