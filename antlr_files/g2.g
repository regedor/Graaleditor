grammar g2;

options {
  language=JavaScript;
}

grammar_sq returns [out]
  : { $out=new Object(); $out.grammar=new Object(); $out.grammar_html=""; }
    { $out.rule_counter = 0; }                  //Numero de Produções
    { $out.terminal_rule_counter = 0; }         //
    { $out.unitary_rule_counter = 0; }          //Numero de Produções unitárias
    { $out.terminal_elem_counter = 0; }         //Numero de simbolos terminais
    { $out.recursive_rule_counter = 0; }        //Numero de Produções recursivas
    { $out.total_right_elem = 0; }              //Tamanho do recursivo descendente
    { $out.total_rule_alternatives = 0; }       
    { var pos = 0; }
    (rule
      { $out.grammar_html     += $rule.grammar_html ? span_tag($rule.grammar_html,["g_rule"]) : span_tag($text,["g_rule_trash"]) ; }
      { $out.rule_counter++; }
      { $out.terminal_rule_counter   += $rule.terminal_rule_counter; }
      { $out.terminal_elem_counter   += $rule.terminal_elem_counter; }
      { $out.unitary_rule_counter    += $rule.unitary_rule_counter; }
      { $out.total_rule_alternatives += $rule.total_rule_alternatives; }
      { $out.recursive_rule_counter  += $rule.is_recursive; }
      { pos = $text.length; }
      { $out.total_right_elem += $rule.total_right_elem; }
    )+ 

    { $out.total_not_terminal_elem = $out.total_right_elem - $out.terminal_elem_counter; } //Numero de não terminais
    { $out.avg_rhs = $out.total_right_elem / $out.rule_counter; }                 //Tamanho médio do lado direito das produções
    { $out.avg_alternatives = $out.total_rule_alternatives / $out.rule_counter; } //Numero médio de alternativas
    { $out.ll1 = $out.total_right_elem * $out.terminal_elem_counter; }            //Tamanho das Tabelas de Parsing LL(1)

    { alert($out.recursive_rule_counter);return $out;  }
  ;


rule returns [grammar_html,terminal_rule_counter,total_right_elem,terminal_elem_counter,unitary_rule_counter,total_rule_alternatives,is_recursive]
  : id=identifier ':' alternatives ';' 
    { $grammar_html = span_tag($id.text,["g_rule_id"]) + span_tag(":", ["g_rule_begin"]) +
                      span_tag($alternatives.grammar_html, ["g_rule_alternatives"]) + span_tag(";" ,["g_rule_end"]); 
      $terminal_rule_counter = $id.types[1] == "ref-terminal" ? 1 : 0;
      $terminal_elem_counter = $alternatives.terminal_elem_counter ;
      $total_rule_alternatives = $alternatives.total_rule_alternatives ;
      $total_right_elem = $alternatives.total_right_elem ;
      $unitary_rule_counter = $total_right_elem == 1 && $terminal_elem_counter == 0 ? 1 : 0 ;
    }
    { $is_recursive = $alternatives.grammar_html.search("g_single_ref '>"+$id.text+"</span>") == -1 ? 0 : 1;  }
  ; 



identifier returns [types]
  : ID               { $types = ["ref"]; }
  | ID_TERMINAL      { $types = ["ref", "ref-terminal"]; }

  ;

alternatives returns [grammar_html,total_right_elem,terminal_elem_counter,total_rule_alternatives]
  : { $terminal_elem_counter = 0; }
    { $total_rule_alternatives = 1; }
    a=elements 
    { $grammar_html = span_tag($a.grammar_html, ["g_rule_alternative"]);
      $total_right_elem = $a.total_right_elem;
      $terminal_elem_counter += $a.terminal_elem_counter; }
    ('|' b=elements 
      { $grammar_html += span_tag("|", ["g_rule_alternative_begin"]); 
        $grammar_html += span_tag($b.grammar_html, ["g_rule_alternative"]); 
        $total_right_elem += $b.total_right_elem; 
        $terminal_elem_counter += $b.terminal_elem_counter;
        $total_rule_alternatives += 1; }
    )* 
  ;

elements returns [grammar_html,total_right_elem,terminal_elem_counter]
  : { $grammar_html=""; $total_right_elem = 0; }
    { $terminal_elem_counter = 0; }
    (element 
      { $grammar_html += $element.grammar_html; 
        $total_right_elem += $element.total_right_elem;
        $terminal_elem_counter += $element.terminal_elem_counter; }
    )+ 
  ;

element returns [grammar_html,total_right_elem,terminal_elem_counter]
  : { $grammar_html=""; }
    ('~'
      { $grammar_html += span_tag("~",["g_negation"]); }
    )?
    s=single 
    { $grammar_html += span_tag($single.text,["g_single", "g_single_"+$single.types[0],$single.types[1] ? $single.types[1]: "" ]);
      $terminal_elem_counter = ($s.types[0] == "literal" || $s.types[1] == "ref-terminal") ? 1 : 0;
      $total_right_elem = 1; }
    (multiplier 
      { $grammar_html   += $multiplier.grammar_html; }
    )?  
  | { $grammar_html=""; }
    ('~'
      { $grammar_html += span_tag("~",["g_negation"]); }
     )?
    '('a=alternatives')' 
    { $grammar_html += "("+$a.grammar_html+")"; }
    { $total_right_elem = $alternatives.total_right_elem; }
    { $terminal_elem_counter = $a.terminal_elem_counter; }
    (multiplier 
      { $grammar_html   += $multiplier.grammar_html; }
    )? 
  ;

multiplier returns [grammar_html]
  : '*' { $grammar_html = span_tag("*",["g_multiplier", "g_multiplier_star"]); }
  | '+' { $grammar_html = span_tag("+",["g_multiplier", "g_multiplier_plus"]); }
  | '?' { $grammar_html = span_tag("?",["g_multiplier", "g_multiplier_bool"]); }
  ;

single returns [types]
  : a=STRING ('..' b=STRING)? {$types=['literal']; } 
  | identifier                {$types=$identifier.types;     }
  ;


ID
  : ('a'..'z'|'_') ('a'..'z'|'A'..'Z'|'0'..'9'|'_')*
  ;


ID_TERMINAL
  : ('A'..'Z') ('a'..'z'|'A'..'Z'|'0'..'9'|'_')*
  ;

STRING
    :  '"' ( ESC_SEQ | ~('\\'|'"') )* '"'
	|	'\'' ( ESC_SEQ | ~('\\'|'\'') )* '\''
    ;

fragment
HEX_DIGIT : ('0'..'9'|'a'..'f'|'A'..'F') ;

fragment
ESC_SEQ
    :   '\\' ('b'|'t'|'n'|'f'|'r'|'\"'|'\''|'\\')
    |   UNICODE_ESC
    |   OCTAL_ESC
    ;

fragment
OCTAL_ESC
    :   '\\' ('0'..'3') ('0'..'7') ('0'..'7')
    |   '\\' ('0'..'7') ('0'..'7')
    |   '\\' ('0'..'7')
    ;

fragment
UNICODE_ESC
    :   '\\' 'u' HEX_DIGIT HEX_DIGIT HEX_DIGIT HEX_DIGIT
    ;


WS  :   ( ' '
        | '\t'
        | '\r'
        | '\n'
        ) {$channel=HIDDEN;}
    ;
