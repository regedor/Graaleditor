function start_editor(){
  editable_on('#grammar_title');
  $('#grammar_title').keypress(function(event){ return event.which != 13; });
  editable_on('#grammar_content');
  update_grammar();
  void 0
}

function editable_on(selector) {
  $(selector).attr('contentEditable',true);
  $(selector).attr('designMode','on'); 
}

function span_tag(text, classes){
  return "<span class='" + classes.join(" ") + "'>" + text + "</span>" ;
}

function ts(x,text){
//  return "<span class='" + x + "'>" + text + "</span>";
  return span_tag(text,[x]);
}

function load_grammar(){
  cstream = new org.antlr.runtime.ANTLRStringStream($('#grammar_content').text()),
  lexer   = new g2Lexer(cstream),
  tstream = new org.antlr.runtime.CommonTokenStream(lexer),
  parser  = new g2Parser(tstream);
  return parser.grammar_sq();
}

function update_grammar(){
  g = load_grammar();
  $('#grammar_content').html(g.grammar_html);
  $('#m_rule_counter          > .m_value').html(g.rule_counter          .toString());
  $('#m_terminal_rule_counter > .m_value').html(g.terminal_rule_counter .toString());
  $('#m_unitary_rule_counter  > .m_value').html(g.unitary_rule_counter  .toString());
  $('#m_terminal_elem_counter > .m_value').html(g.terminal_elem_counter .toString());
  $('#m_recursive_rule_counter> .m_value').html(g.recursive_rule_counter.toString());
  $('#m_total_right_elem      > .m_value').html(g.total_right_elem      .toString());
  $('#m_avg_rhs               > .m_value').html(g.avg_rhs               .toString());
  $('#m_avg_alternatives      > .m_value').html(g.avg_alternatives      .toString());
  $('#m_ll1                   > .m_value').html(g.ll1                   .toString());
}

function test_it(){
  result  = load_grammar();
  g       = result.grammar;
  g_html  = result.grammar_html;
  //alert(g['rule'].length);
  //alert(g['rule'][0].length);
  //alert(g['rule'][0][0]['ref']);
  out="";
  alert(g['rule']);
  for(var id in g) {
    out += ts("g_p_id", id);
    out += ts("g_p_begin", ":");
    for(var i=0,len=g[id][0].length; element=g[id][0][i], i<len; i++) {
      out += ts("g_p_option", g[id][0][i]['ref']);
    }
    for(var i=1,len=g[id].length; option=g[id][i], i<len; i++) {
      out += ts("g_p_option_separator", "|");
      for(var i=0,len=option.length; element=option[i], i<len; i++) {
        out += ts("g_p_option", option['ref']);
      }
    }
    out += ts("g_p_end", ";");
  }
  alert($(out).text());
  alert($(g_html).text());
}
