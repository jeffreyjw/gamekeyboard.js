"use strict"

#
#* ProjectName: yourLibrary
#* Name: Christopher EnyTC
#* Email: chrisenytc@gmail.com
#* Username: chrisenytc
#* Site: http://chris.enytc.com
#* Github: https://github.com/chrisenytc/generator-library
#* Twitter: @chrisenytc
#
window.yourLibrary = (() ->

  #Private Functions
  
  #
  #  * 
  #  * Function to return a version of yourLibrary
  #  *
  #
  
  version = "0.0.1"
  
  #
  #  * 
  #  * Function to say hello world
  #  *
  #  
  helloWorld = () ->
    return "Hello World JS!"

  #Return
  version: version
  hello: helloWorld

)()