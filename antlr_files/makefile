path=/home/regedor/Projects/graaleditor/site_files/public/javascripts/
all:
	java org.antlr.Tool g2.g
	javac *.java

copy:
	cp -f g2Lexer.js $(path)
	cp -f g2Parser.js $(path)

clean:
	rm -rf g2Lexer.class  g2Lexer.java  g2Parser.class  g2Parser.java  g2.tokens  output Test.java
