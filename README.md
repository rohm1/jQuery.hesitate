jQuery.hesitate
===============

A jQuery plugin to bind the hesitate event

##The hesitate event?##
Sometimes you want to display something when the user hovers an element, but the user may accidentaly hover this element while dragging the mouse. With a simple mouseover event, you will display your target but the user has not interest in it. The hesitate event is a workaround to this: set a tine the user has to hover your element, and when the timeout is done, if the user is still hovering your element, you can display your target.

##How to use##
```js
$('#trigger').hesitate({time: 1000}, function() {
	$('#target').show();
});
$('#trigger2').hesitate(function() {
  $('#target2').show();
});
```
Parameters:
* time: timeout time. Default: 700.

##Remark##
I kown, this is not literally an event, but it works the same as when you bind the mouseover event with .mouseover().

##Licence##
Copyright (c) 2012, rohm1 <rp@rohm1.com>.
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions
are met:

* Redistributions of source code must retain the above copyright
notice, this list of conditions and the following disclaimer.

* Neither the name of rohm1 nor the names of his
contributors may be used to endorse or promote products derived
from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
"AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS
FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT
LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN
ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
POSSIBILITY OF SUCH DAMAGE.