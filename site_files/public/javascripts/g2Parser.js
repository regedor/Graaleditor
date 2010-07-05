// $ANTLR 3.2 Sep 23, 2009 12:02:23 g2.g 2010-07-05 02:06:23

var g2Parser = function(input, state) {
    if (!state) {
        state = new org.antlr.runtime.RecognizerSharedState();
    }

    (function(){
    }).call(this);

    g2Parser.superclass.constructor.call(this, input, state);


         

    /* @todo only create adaptor if output=AST */
    this.adaptor = new org.antlr.runtime.tree.CommonTreeAdaptor();

};

org.antlr.lang.augmentObject(g2Parser, {
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
// public class variables
var T__18= 18,
    STRING= 6,
    T__17= 17,
    T__16= 16,
    T__15= 15,
    T__14= 14,
    T__13= 13,
    T__12= 12,
    ID= 4,
    T__21= 21,
    T__20= 20,
    EOF= -1,
    OCTAL_ESC= 10,
    ESC_SEQ= 7,
    UNICODE_ESC= 9,
    ID_TERMINAL= 5,
    WS= 11,
    HEX_DIGIT= 8,
    T__19= 19;

// public instance methods/vars
org.antlr.lang.extend(g2Parser, org.antlr.runtime.Parser, {
        

    getTokenNames: function() { return g2Parser.tokenNames; },
    getGrammarFileName: function() { return "g2.g"; }
});
org.antlr.lang.augmentObject(g2Parser.prototype, {

    // inline static return class
    grammar_sq_return: (function() {
        g2Parser.grammar_sq_return = function(){};
        org.antlr.lang.extend(g2Parser.grammar_sq_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
        });
        return;
    })(),

    // g2.g:7:1: grammar_sq returns [out] : ( rule )+ ;
    // $ANTLR start "grammar_sq"
    grammar_sq: function() {
        var retval = new g2Parser.grammar_sq_return();
        retval.start = this.input.LT(1);

         var rule1 = null;

        try {
            // g2.g:8:3: ( ( rule )+ )
            // g2.g:8:5: ( rule )+
             retval.out =new Object(); retval.out.grammar=new Object(); retval.out.grammar_html=""; 
             retval.out.rule_counter = 0; 
             retval.out.terminal_rule_counter = 0; 
             retval.out.unitary_rule_counter = 0; 
             retval.out.terminal_elem_counter = 0; 
             retval.out.recursive_rule_counter = 0; 
             retval.out.total_right_elem = 0; 
             retval.out.total_rule_alternatives = 0; 
             var pos = 0; 
            // g2.g:17:5: ( rule )+
            var cnt1=0;
            loop1:
            do {
                var alt1=2;
                var LA1_0 = this.input.LA(1);

                if ( ((LA1_0>=ID && LA1_0<=ID_TERMINAL)) ) {
                    alt1=1;
                }


                switch (alt1) {
                case 1 :
                    // g2.g:17:6: rule
                    this.pushFollow(g2Parser.FOLLOW_rule_in_grammar_sq158);
                    rule1=this.rule();

                    this.state._fsp--;

                     retval.out.grammar_html     += (rule1!==null?rule1.grammar_html:null) ? span_tag((rule1!==null?rule1.grammar_html:null),["g_rule"]) : span_tag(this.input.toString(retval.start,this.input.LT(-1)),["g_rule_trash"]) ; 
                     retval.out.rule_counter++; 
                     retval.out.terminal_rule_counter   += (rule1!==null?rule1.terminal_rule_counter:null); 
                     retval.out.terminal_elem_counter   += (rule1!==null?rule1.terminal_elem_counter:null); 
                     retval.out.unitary_rule_counter    += (rule1!==null?rule1.unitary_rule_counter:null); 
                     retval.out.total_rule_alternatives += (rule1!==null?rule1.total_rule_alternatives:null); 
                     retval.out.recursive_rule_counter  += (rule1!==null?rule1.is_recursive:null); 
                     pos = this.input.toString(retval.start,this.input.LT(-1)).length; 
                     retval.out.total_right_elem += (rule1!==null?rule1.total_right_elem:null); 


                    break;

                default :
                    if ( cnt1 >= 1 ) {
                        break loop1;
                    }
                        var eee = new org.antlr.runtime.EarlyExitException(1, this.input);
                        throw eee;
                }
                cnt1++;
            } while (true);

             retval.out.total_not_terminal_elem = retval.out.total_right_elem - retval.out.terminal_elem_counter; 
             retval.out.avg_rhs = retval.out.total_right_elem / retval.out.rule_counter; 
             retval.out.avg_alternatives = retval.out.total_rule_alternatives / retval.out.rule_counter; 
             retval.out.ll1 = retval.out.total_right_elem * retval.out.terminal_elem_counter; 
             return retval.out;  



            retval.stop = this.input.LT(-1);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    rule_return: (function() {
        g2Parser.rule_return = function(){};
        org.antlr.lang.extend(g2Parser.rule_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
        });
        return;
    })(),

    // g2.g:38:1: rule returns [grammar_html,terminal_rule_counter,total_right_elem,terminal_elem_counter,unitary_rule_counter,total_rule_alternatives,is_recursive] : id= identifier ':' alternatives ';' ;
    // $ANTLR start "rule"
    rule: function() {
        var retval = new g2Parser.rule_return();
        retval.start = this.input.LT(1);

         var id = null;
         var alternatives2 = null;

        try {
            // g2.g:39:3: (id= identifier ':' alternatives ';' )
            // g2.g:39:5: id= identifier ':' alternatives ';'
            this.pushFollow(g2Parser.FOLLOW_identifier_in_rule321);
            id=this.identifier();

            this.state._fsp--;

            this.match(this.input,12,g2Parser.FOLLOW_12_in_rule323); 
            this.pushFollow(g2Parser.FOLLOW_alternatives_in_rule325);
            alternatives2=this.alternatives();

            this.state._fsp--;

            this.match(this.input,13,g2Parser.FOLLOW_13_in_rule327); 
             retval.grammar_html = span_tag((id?this.input.toString(id.start,id.stop):null),["g_rule_id"]) + span_tag(":", ["g_rule_begin"]) +
                                  span_tag((alternatives2!==null?alternatives2.grammar_html:null), ["g_rule_alternatives"]) + span_tag(";" ,["g_rule_end"]); 
                  retval.terminal_rule_counter = (id!==null?id.types:null)[1] == "ref-terminal" ? 1 : 0;
                  retval.terminal_elem_counter = (alternatives2!==null?alternatives2.terminal_elem_counter:null) ;
                  retval.total_rule_alternatives = (alternatives2!==null?alternatives2.total_rule_alternatives:null) ;
                  retval.total_right_elem = (alternatives2!==null?alternatives2.total_right_elem:null) ;
                  retval.unitary_rule_counter = retval.total_right_elem == 1 && retval.terminal_elem_counter == 0 ? 1 : 0 ;
                
             retval.is_recursive = (alternatives2!==null?alternatives2.grammar_html:null).search("g_single_ref '>"+(id?this.input.toString(id.start,id.stop):null)+"</span>") == -1 ? 0 : 1;  



            retval.stop = this.input.LT(-1);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    identifier_return: (function() {
        g2Parser.identifier_return = function(){};
        org.antlr.lang.extend(g2Parser.identifier_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
        });
        return;
    })(),

    // g2.g:53:1: identifier returns [types] : ( ID | ID_TERMINAL );
    // $ANTLR start "identifier"
    identifier: function() {
        var retval = new g2Parser.identifier_return();
        retval.start = this.input.LT(1);

        try {
            // g2.g:54:3: ( ID | ID_TERMINAL )
            var alt2=2;
            var LA2_0 = this.input.LA(1);

            if ( (LA2_0==ID) ) {
                alt2=1;
            }
            else if ( (LA2_0==ID_TERMINAL) ) {
                alt2=2;
            }
            else {
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 2, 0, this.input);

                throw nvae;
            }
            switch (alt2) {
                case 1 :
                    // g2.g:54:5: ID
                    this.match(this.input,ID,g2Parser.FOLLOW_ID_in_identifier360); 
                     retval.types = ["ref"]; 


                    break;
                case 2 :
                    // g2.g:55:5: ID_TERMINAL
                    this.match(this.input,ID_TERMINAL,g2Parser.FOLLOW_ID_TERMINAL_in_identifier382); 
                     retval.types = ["ref", "ref-terminal"]; 


                    break;

            }
            retval.stop = this.input.LT(-1);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    alternatives_return: (function() {
        g2Parser.alternatives_return = function(){};
        org.antlr.lang.extend(g2Parser.alternatives_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
        });
        return;
    })(),

    // g2.g:59:1: alternatives returns [grammar_html,total_right_elem,terminal_elem_counter,total_rule_alternatives] : a= elements ( '|' b= elements )* ;
    // $ANTLR start "alternatives"
    alternatives: function() {
        var retval = new g2Parser.alternatives_return();
        retval.start = this.input.LT(1);

         var a = null;
         var b = null;

        try {
            // g2.g:60:3: (a= elements ( '|' b= elements )* )
            // g2.g:60:5: a= elements ( '|' b= elements )*
             retval.terminal_elem_counter = 0; 
             retval.total_rule_alternatives = 1; 
            this.pushFollow(g2Parser.FOLLOW_elements_in_alternatives421);
            a=this.elements();

            this.state._fsp--;

             retval.grammar_html = span_tag((a!==null?a.grammar_html:null), ["g_rule_alternative"]);
                  retval.total_right_elem = (a!==null?a.total_right_elem:null);
                  retval.terminal_elem_counter += (a!==null?a.terminal_elem_counter:null); 
            // g2.g:66:5: ( '|' b= elements )*
            loop3:
            do {
                var alt3=2;
                var LA3_0 = this.input.LA(1);

                if ( (LA3_0==14) ) {
                    alt3=1;
                }


                switch (alt3) {
                case 1 :
                    // g2.g:66:6: '|' b= elements
                    this.match(this.input,14,g2Parser.FOLLOW_14_in_alternatives435); 
                    this.pushFollow(g2Parser.FOLLOW_elements_in_alternatives439);
                    b=this.elements();

                    this.state._fsp--;

                     retval.grammar_html += span_tag("|", ["g_rule_alternative_begin"]); 
                            retval.grammar_html += span_tag((b!==null?b.grammar_html:null), ["g_rule_alternative"]); 
                            retval.total_right_elem += (b!==null?b.total_right_elem:null); 
                            retval.terminal_elem_counter += (b!==null?b.terminal_elem_counter:null);
                            retval.total_rule_alternatives += 1; 


                    break;

                default :
                    break loop3;
                }
            } while (true);




            retval.stop = this.input.LT(-1);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    elements_return: (function() {
        g2Parser.elements_return = function(){};
        org.antlr.lang.extend(g2Parser.elements_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
        });
        return;
    })(),

    // g2.g:75:1: elements returns [grammar_html,total_right_elem,terminal_elem_counter] : ( element )+ ;
    // $ANTLR start "elements"
    elements: function() {
        var retval = new g2Parser.elements_return();
        retval.start = this.input.LT(1);

         var element3 = null;

        try {
            // g2.g:76:3: ( ( element )+ )
            // g2.g:76:5: ( element )+
             retval.grammar_html =""; retval.total_right_elem = 0; 
             retval.terminal_elem_counter = 0; 
            // g2.g:78:5: ( element )+
            var cnt4=0;
            loop4:
            do {
                var alt4=2;
                var LA4_0 = this.input.LA(1);

                if ( ((LA4_0>=ID && LA4_0<=STRING)||(LA4_0>=15 && LA4_0<=16)) ) {
                    alt4=1;
                }


                switch (alt4) {
                case 1 :
                    // g2.g:78:6: element
                    this.pushFollow(g2Parser.FOLLOW_element_in_elements486);
                    element3=this.element();

                    this.state._fsp--;

                     retval.grammar_html += (element3!==null?element3.grammar_html:null); 
                            retval.total_right_elem += (element3!==null?element3.total_right_elem:null);
                            retval.terminal_elem_counter += (element3!==null?element3.terminal_elem_counter:null); 


                    break;

                default :
                    if ( cnt4 >= 1 ) {
                        break loop4;
                    }
                        var eee = new org.antlr.runtime.EarlyExitException(4, this.input);
                        throw eee;
                }
                cnt4++;
            } while (true);




            retval.stop = this.input.LT(-1);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    element_return: (function() {
        g2Parser.element_return = function(){};
        org.antlr.lang.extend(g2Parser.element_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
        });
        return;
    })(),

    // g2.g:85:1: element returns [grammar_html,total_right_elem,terminal_elem_counter] : ( ( '~' )? s= single ( multiplier )? | ( '~' )? '(' a= alternatives ')' ( multiplier )? );
    // $ANTLR start "element"
    element: function() {
        var retval = new g2Parser.element_return();
        retval.start = this.input.LT(1);

         var s = null;
         var a = null;
         var multiplier4 = null;
         var multiplier5 = null;

        try {
            // g2.g:86:3: ( ( '~' )? s= single ( multiplier )? | ( '~' )? '(' a= alternatives ')' ( multiplier )? )
            var alt9=2;
            switch ( this.input.LA(1) ) {
            case 15:
                var LA9_1 = this.input.LA(2);

                if ( ((LA9_1>=ID && LA9_1<=STRING)) ) {
                    alt9=1;
                }
                else if ( (LA9_1==16) ) {
                    alt9=2;
                }
                else {
                    var nvae =
                        new org.antlr.runtime.NoViableAltException("", 9, 1, this.input);

                    throw nvae;
                }
                break;
            case ID:
            case ID_TERMINAL:
            case STRING:
                alt9=1;
                break;
            case 16:
                alt9=2;
                break;
            default:
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 9, 0, this.input);

                throw nvae;
            }

            switch (alt9) {
                case 1 :
                    // g2.g:86:5: ( '~' )? s= single ( multiplier )?
                     retval.grammar_html =""; 
                    // g2.g:87:5: ( '~' )?
                    var alt5=2;
                    var LA5_0 = this.input.LA(1);

                    if ( (LA5_0==15) ) {
                        alt5=1;
                    }
                    switch (alt5) {
                        case 1 :
                            // g2.g:87:6: '~'
                            this.match(this.input,15,g2Parser.FOLLOW_15_in_element527); 
                             retval.grammar_html += span_tag("~",["g_negation"]); 


                            break;

                    }

                    this.pushFollow(g2Parser.FOLLOW_single_in_element550);
                    s=this.single();

                    this.state._fsp--;

                     retval.grammar_html += span_tag((s?this.input.toString(s.start,s.stop):null),["g_single", "g_single_"+(s!==null?s.types:null)[0],(s!==null?s.types:null)[1] ? (s!==null?s.types:null)[1]: "" ]);
                          retval.terminal_elem_counter = ((s!==null?s.types:null)[0] == "literal" || (s!==null?s.types:null)[1] == "ref-terminal") ? 1 : 0;
                          retval.total_right_elem = 1; 
                    // g2.g:94:5: ( multiplier )?
                    var alt6=2;
                    var LA6_0 = this.input.LA(1);

                    if ( ((LA6_0>=18 && LA6_0<=20)) ) {
                        alt6=1;
                    }
                    switch (alt6) {
                        case 1 :
                            // g2.g:94:6: multiplier
                            this.pushFollow(g2Parser.FOLLOW_multiplier_in_element564);
                            multiplier4=this.multiplier();

                            this.state._fsp--;

                             retval.grammar_html   += multiplier4; 


                            break;

                    }



                    break;
                case 2 :
                    // g2.g:97:5: ( '~' )? '(' a= alternatives ')' ( multiplier )?
                     retval.grammar_html =""; 
                    // g2.g:98:5: ( '~' )?
                    var alt7=2;
                    var LA7_0 = this.input.LA(1);

                    if ( (LA7_0==15) ) {
                        alt7=1;
                    }
                    switch (alt7) {
                        case 1 :
                            // g2.g:98:6: '~'
                            this.match(this.input,15,g2Parser.FOLLOW_15_in_element595); 
                             retval.grammar_html += span_tag("~",["g_negation"]); 


                            break;

                    }

                    this.match(this.input,16,g2Parser.FOLLOW_16_in_element617); 
                    this.pushFollow(g2Parser.FOLLOW_alternatives_in_element620);
                    a=this.alternatives();

                    this.state._fsp--;

                    this.match(this.input,17,g2Parser.FOLLOW_17_in_element621); 
                     retval.grammar_html += "("+(a!==null?a.grammar_html:null)+")"; 
                     retval.total_right_elem = (a!==null?a.total_right_elem:null); 
                     retval.terminal_elem_counter = (a!==null?a.terminal_elem_counter:null); 
                    // g2.g:105:5: ( multiplier )?
                    var alt8=2;
                    var LA8_0 = this.input.LA(1);

                    if ( ((LA8_0>=18 && LA8_0<=20)) ) {
                        alt8=1;
                    }
                    switch (alt8) {
                        case 1 :
                            // g2.g:105:6: multiplier
                            this.pushFollow(g2Parser.FOLLOW_multiplier_in_element647);
                            multiplier5=this.multiplier();

                            this.state._fsp--;

                             retval.grammar_html   += multiplier5; 


                            break;

                    }



                    break;

            }
            retval.stop = this.input.LT(-1);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },


    // g2.g:110:1: multiplier returns [grammar_html] : ( '*' | '+' | '?' );
    // $ANTLR start "multiplier"
    multiplier: function() {
        var grammar_html = null;

        try {
            // g2.g:111:3: ( '*' | '+' | '?' )
            var alt10=3;
            switch ( this.input.LA(1) ) {
            case 18:
                alt10=1;
                break;
            case 19:
                alt10=2;
                break;
            case 20:
                alt10=3;
                break;
            default:
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 10, 0, this.input);

                throw nvae;
            }

            switch (alt10) {
                case 1 :
                    // g2.g:111:5: '*'
                    this.match(this.input,18,g2Parser.FOLLOW_18_in_multiplier681); 
                     grammar_html = span_tag("*",["g_multiplier", "g_multiplier_star"]); 


                    break;
                case 2 :
                    // g2.g:112:5: '+'
                    this.match(this.input,19,g2Parser.FOLLOW_19_in_multiplier689); 
                     grammar_html = span_tag("+",["g_multiplier", "g_multiplier_plus"]); 


                    break;
                case 3 :
                    // g2.g:113:5: '?'
                    this.match(this.input,20,g2Parser.FOLLOW_20_in_multiplier697); 
                     grammar_html = span_tag("?",["g_multiplier", "g_multiplier_bool"]); 


                    break;

            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return grammar_html;
    },

    // inline static return class
    single_return: (function() {
        g2Parser.single_return = function(){};
        org.antlr.lang.extend(g2Parser.single_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
        });
        return;
    })(),

    // g2.g:116:1: single returns [types] : (a= STRING ( '..' b= STRING )? | identifier );
    // $ANTLR start "single"
    single: function() {
        var retval = new g2Parser.single_return();
        retval.start = this.input.LT(1);

        var a = null;
        var b = null;
         var identifier6 = null;

        try {
            // g2.g:117:3: (a= STRING ( '..' b= STRING )? | identifier )
            var alt12=2;
            var LA12_0 = this.input.LA(1);

            if ( (LA12_0==STRING) ) {
                alt12=1;
            }
            else if ( ((LA12_0>=ID && LA12_0<=ID_TERMINAL)) ) {
                alt12=2;
            }
            else {
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 12, 0, this.input);

                throw nvae;
            }
            switch (alt12) {
                case 1 :
                    // g2.g:117:5: a= STRING ( '..' b= STRING )?
                    a=this.match(this.input,STRING,g2Parser.FOLLOW_STRING_in_single718); 
                    // g2.g:117:14: ( '..' b= STRING )?
                    var alt11=2;
                    var LA11_0 = this.input.LA(1);

                    if ( (LA11_0==21) ) {
                        alt11=1;
                    }
                    switch (alt11) {
                        case 1 :
                            // g2.g:117:15: '..' b= STRING
                            this.match(this.input,21,g2Parser.FOLLOW_21_in_single721); 
                            b=this.match(this.input,STRING,g2Parser.FOLLOW_STRING_in_single725); 


                            break;

                    }

                    retval.types =['literal']; 


                    break;
                case 2 :
                    // g2.g:118:5: identifier
                    this.pushFollow(g2Parser.FOLLOW_identifier_in_single736);
                    identifier6=this.identifier();

                    this.state._fsp--;

                    retval.types =(identifier6!==null?identifier6.types:null);     


                    break;

            }
            retval.stop = this.input.LT(-1);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    }

    // Delegated rules




}, true); // important to pass true to overwrite default implementations

 

// public class variables
org.antlr.lang.augmentObject(g2Parser, {
    tokenNames: ["<invalid>", "<EOR>", "<DOWN>", "<UP>", "ID", "ID_TERMINAL", "STRING", "ESC_SEQ", "HEX_DIGIT", "UNICODE_ESC", "OCTAL_ESC", "WS", "':'", "';'", "'|'", "'~'", "'('", "')'", "'*'", "'+'", "'?'", "'..'"],
    FOLLOW_rule_in_grammar_sq158: new org.antlr.runtime.BitSet([0x00000032, 0x00000000]),
    FOLLOW_identifier_in_rule321: new org.antlr.runtime.BitSet([0x00001000, 0x00000000]),
    FOLLOW_12_in_rule323: new org.antlr.runtime.BitSet([0x00018070, 0x00000000]),
    FOLLOW_alternatives_in_rule325: new org.antlr.runtime.BitSet([0x00002000, 0x00000000]),
    FOLLOW_13_in_rule327: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_ID_in_identifier360: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_ID_TERMINAL_in_identifier382: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_elements_in_alternatives421: new org.antlr.runtime.BitSet([0x00004002, 0x00000000]),
    FOLLOW_14_in_alternatives435: new org.antlr.runtime.BitSet([0x00018070, 0x00000000]),
    FOLLOW_elements_in_alternatives439: new org.antlr.runtime.BitSet([0x00004002, 0x00000000]),
    FOLLOW_element_in_elements486: new org.antlr.runtime.BitSet([0x00018072, 0x00000000]),
    FOLLOW_15_in_element527: new org.antlr.runtime.BitSet([0x00008070, 0x00000000]),
    FOLLOW_single_in_element550: new org.antlr.runtime.BitSet([0x001C0002, 0x00000000]),
    FOLLOW_multiplier_in_element564: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_15_in_element595: new org.antlr.runtime.BitSet([0x00010000, 0x00000000]),
    FOLLOW_16_in_element617: new org.antlr.runtime.BitSet([0x00018070, 0x00000000]),
    FOLLOW_alternatives_in_element620: new org.antlr.runtime.BitSet([0x00020000, 0x00000000]),
    FOLLOW_17_in_element621: new org.antlr.runtime.BitSet([0x001C0002, 0x00000000]),
    FOLLOW_multiplier_in_element647: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_18_in_multiplier681: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_19_in_multiplier689: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_20_in_multiplier697: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_STRING_in_single718: new org.antlr.runtime.BitSet([0x00200002, 0x00000000]),
    FOLLOW_21_in_single721: new org.antlr.runtime.BitSet([0x00000040, 0x00000000]),
    FOLLOW_STRING_in_single725: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_identifier_in_single736: new org.antlr.runtime.BitSet([0x00000002, 0x00000000])
});

})();