import{_ as t,p as e,q as d,a1 as r}from"./framework-fb0bc66b.js";const a={},n=r('<h1 id="col" tabindex="-1"><a class="header-anchor" href="#col" aria-hidden="true">#</a> COL</h1><table><thead><tr><th>Name</th><th>Size (per element)</th><th>Description</th></tr></thead><tbody><tr><td>COL Version</td><td>(int32)0x4</td><td>indicates Format version</td></tr><tr><td><a href="#standard-colors">Colors</a></td><td>variable</td><td>a list of all colors within the Color Table</td></tr><tr><td><a href="#water-colors">Water Colors</a></td><td>variable</td><td>a list of all water colors within the Color Table (only if Version &gt; 0)</td></tr></tbody></table><h2 id="standard-colors" tabindex="-1"><a class="header-anchor" href="#standard-colors" aria-hidden="true">#</a> Standard Colors</h2><table><thead><tr><th>Name</th><th>Size (per element)</th><th>Description</th></tr></thead><tbody><tr><td>Count</td><td>(int32)0x4</td><td>Amount of Colors in the table</td></tr></tbody></table><p>(repeated per count)</p><table><thead><tr><th>Name</th><th>Size (per element)</th><th>Description</th></tr></thead><tbody><tr><td>Name</td><td>variable</td><td>a string(int16 indicates length, then Little endian Unicode string of specified length) indicating Color name</td></tr><tr><td>Color</td><td><a href="#argb">(ARGB)</a>0x4</td><td>a string(int16 indicates length, then Little endian Unicode string of specified length) indicating Color name</td></tr></tbody></table><h2 id="water-colors" tabindex="-1"><a class="header-anchor" href="#water-colors" aria-hidden="true">#</a> Water Colors</h2><table><thead><tr><th>Name</th><th>Size (per element)</th><th>Description</th></tr></thead><tbody><tr><td>Count</td><td>(int32)0x4</td><td>Amount of Colors in the table</td></tr></tbody></table><p>(repeated per count)</p><table><thead><tr><th>Name</th><th>Size (per element)</th><th>Description</th></tr></thead><tbody><tr><td>Name</td><td>variable</td><td>a string(int16 indicates length, then Little endian Unicode string of specified length) indicating Color name</td></tr><tr><td>Surface Color</td><td><a href="#argb">(ARGB)</a>0x4</td><td>a string(int16 indicates length, then Little endian Unicode string of specified length) indicating Color name</td></tr><tr><td>Underwater Color</td><td><a href="#argb">(ARGB)</a>0x4</td><td>a string(int16 indicates length, then Little endian Unicode string of specified length) indicating Color name</td></tr><tr><td>Fog Color</td><td><a href="#argb">(ARGB)</a>0x4</td><td>a string(int16 indicates length, then Little endian Unicode string of specified length) indicating Color name</td></tr></tbody></table><h2 id="argb" tabindex="-1"><a class="header-anchor" href="#argb" aria-hidden="true">#</a> ARGB</h2><table><thead><tr><th>Name</th><th>Size (per element)</th><th>Description</th></tr></thead><tbody><tr><td>Alpha</td><td>(int8)0x1</td><td>Alpha color channel</td></tr><tr><td>Red</td><td>(int8)0x1</td><td>Red color channel</td></tr><tr><td>Green</td><td>(int8)0x1</td><td>Green color channel</td></tr><tr><td>Blue</td><td>(int8)0x1</td><td>Blue color channel</td></tr></tbody></table>',12),i=[n];function o(h,l){return e(),d("div",null,i)}const s=t(a,[["render",o],["__file","index.html.vue"]]);export{s as default};