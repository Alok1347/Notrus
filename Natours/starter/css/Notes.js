/* 
# We can use !important to mark any style and it will have second highest precendence 
in style list after user styles 

# we should always define one root font size and based on that we should 
give other property values in rem as rem is calculated on root font size.
Ex: html {
	font-size: 10px; // Now 10px will be equal to 1 rem because 1 rem will be exactly root font size 
}
but we should give it in term of percentage so user defined css should not be overidden.
so as 100%=16px
1 px= 100/16
10px= (100/16)*10=62.5% or (10/16)*100=62.5%


body{
    padding=3rem // 30px or 62.5*3=187.5% // buw we converted percentage to 10 px so it wil be equal 
    to 1 rem and hence it will be easy to calculate.
}
*/
/* 
in Scss we can do nesting of child tags ,
# &:first-child => navigation li:first-child (in css), & operator simply copy the path that is being already used in nesting

# we can use claerfix method to bring effects that we lose because of float style, EX:
1.<nav class='clearfix'> HTML
2 .clearfix::after{
    content: "";
    clear: both;
    display: table;
  }
or  Both are same,
.nav::after{    
    content: "";
    clear: both;
    display: table;
  }
#      background-color:darken($color-secondary, 15% ); function to auto calculate style and apply , opposite one also avilable i.e lighten().

*/
