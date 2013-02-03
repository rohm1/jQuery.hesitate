/*
Copyright (c) 2012-2013, rohm1 <rp@rohm1.com>.
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
*/

(function($) {
	$.fn.extend({
		hesitate: function(params, fn) {
			defaultParams = {time: 700};

			if($.isFunction(params)) {
				fn = params;
				params = defaultParams;
			}
			else {
				for(x in defaultParams)
					if(params[x] == undefined)
						params[x] = defaultParams[x];
			}

			$(this).each(function() {
				$(this).on({
					mouseenter: function() {
						var t = $(this).data('hesitateIn', true);
						setTimeout(function() {
							if(t.data('hesitateIn'))
								t.animate(0, fn);
							}, params.time);
					},
					mouseleave: function() {
						$(this).data('hesitateIn', false);
					}
				});
			});

			return $(this);
		},
	});

})(jQuery);

