(function() {var implementors = {
"anyhow":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>&gt; for <a class=\"struct\" href=\"anyhow/struct.Error.html\" title=\"struct anyhow::Error\">Error</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a>&gt; for <a class=\"struct\" href=\"anyhow/struct.Error.html\" title=\"struct anyhow::Error\">Error</a>"]],
"crossbeam_epoch":[["impl&lt;T: ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a> + <a class=\"trait\" href=\"crossbeam_epoch/trait.Pointable.html\" title=\"trait crossbeam_epoch::Pointable\">Pointable</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;T&gt; for <a class=\"struct\" href=\"crossbeam_epoch/struct.Owned.html\" title=\"struct crossbeam_epoch::Owned\">Owned</a>&lt;T&gt;"]],
"either":[["impl&lt;L, R&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.0/std/primitive.str.html\">str</a>&gt; for <a class=\"enum\" href=\"either/enum.Either.html\" title=\"enum either::Either\">Either</a>&lt;L, R&gt;<div class=\"where\">where\n    L: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.0/std/primitive.str.html\">str</a>&gt;,\n    R: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.0/std/primitive.str.html\">str</a>&gt;,</div>"],["impl&lt;L, R&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.80.0/core/ffi/c_str/struct.CStr.html\" title=\"struct core::ffi::c_str::CStr\">CStr</a>&gt; for <a class=\"enum\" href=\"either/enum.Either.html\" title=\"enum either::Either\">Either</a>&lt;L, R&gt;<div class=\"where\">where\n    L: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.80.0/core/ffi/c_str/struct.CStr.html\" title=\"struct core::ffi::c_str::CStr\">CStr</a>&gt;,\n    R: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.80.0/core/ffi/c_str/struct.CStr.html\" title=\"struct core::ffi::c_str::CStr\">CStr</a>&gt;,</div>"],["impl&lt;L, R&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.80.0/std/ffi/os_str/struct.OsStr.html\" title=\"struct std::ffi::os_str::OsStr\">OsStr</a>&gt; for <a class=\"enum\" href=\"either/enum.Either.html\" title=\"enum either::Either\">Either</a>&lt;L, R&gt;<div class=\"where\">where\n    L: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.80.0/std/ffi/os_str/struct.OsStr.html\" title=\"struct std::ffi::os_str::OsStr\">OsStr</a>&gt;,\n    R: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.80.0/std/ffi/os_str/struct.OsStr.html\" title=\"struct std::ffi::os_str::OsStr\">OsStr</a>&gt;,</div>"],["impl&lt;L, R&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.80.0/std/path/struct.Path.html\" title=\"struct std::path::Path\">Path</a>&gt; for <a class=\"enum\" href=\"either/enum.Either.html\" title=\"enum either::Either\">Either</a>&lt;L, R&gt;<div class=\"where\">where\n    L: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.80.0/std/path/struct.Path.html\" title=\"struct std::path::Path\">Path</a>&gt;,\n    R: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.80.0/std/path/struct.Path.html\" title=\"struct std::path::Path\">Path</a>&gt;,</div>"],["impl&lt;L, R, Target&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.0/std/primitive.slice.html\">[Target]</a>&gt; for <a class=\"enum\" href=\"either/enum.Either.html\" title=\"enum either::Either\">Either</a>&lt;L, R&gt;<div class=\"where\">where\n    L: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.0/std/primitive.slice.html\">[Target]</a>&gt;,\n    R: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.0/std/primitive.slice.html\">[Target]</a>&gt;,</div>"],["impl&lt;L, R, Target&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;Target&gt; for <a class=\"enum\" href=\"either/enum.Either.html\" title=\"enum either::Either\">Either</a>&lt;L, R&gt;<div class=\"where\">where\n    L: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;Target&gt;,\n    R: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;Target&gt;,</div>"]],
"ndarray":[["impl&lt;T, Din, Dout&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[<a class=\"enum\" href=\"ndarray/enum.SliceInfoElem.html\" title=\"enum ndarray::SliceInfoElem\">SliceInfoElem</a>]&gt; for <a class=\"struct\" href=\"ndarray/struct.SliceInfo.html\" title=\"struct ndarray::SliceInfo\">SliceInfo</a>&lt;T, Din, Dout&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[<a class=\"enum\" href=\"ndarray/enum.SliceInfoElem.html\" title=\"enum ndarray::SliceInfoElem\">SliceInfoElem</a>]&gt;,\n    Din: <a class=\"trait\" href=\"ndarray/trait.Dimension.html\" title=\"trait ndarray::Dimension\">Dimension</a>,\n    Dout: <a class=\"trait\" href=\"ndarray/trait.Dimension.html\" title=\"trait ndarray::Dimension\">Dimension</a>,</div>"]],
"toml_edit":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.0/std/primitive.str.html\">str</a>&gt; for <a class=\"struct\" href=\"toml_edit/struct.InternalString.html\" title=\"struct toml_edit::InternalString\">InternalString</a>"]],
"winnow":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"winnow/stream/struct.BStr.html\" title=\"struct winnow::stream::BStr\">BStr</a>&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.0/std/primitive.str.html\">str</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"winnow/stream/struct.BStr.html\" title=\"struct winnow::stream::BStr\">BStr</a>&gt; for [<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.0/std/primitive.u8.html\">u8</a>]"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"winnow/stream/struct.Bytes.html\" title=\"struct winnow::stream::Bytes\">Bytes</a>&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.0/std/primitive.str.html\">str</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"winnow/stream/struct.Bytes.html\" title=\"struct winnow::stream::Bytes\">Bytes</a>&gt; for [<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.0/std/primitive.u8.html\">u8</a>]"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.0/std/primitive.u8.html\">u8</a>]&gt; for <a class=\"struct\" href=\"winnow/stream/struct.BStr.html\" title=\"struct winnow::stream::BStr\">BStr</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.0/std/primitive.u8.html\">u8</a>]&gt; for <a class=\"struct\" href=\"winnow/stream/struct.Bytes.html\" title=\"struct winnow::stream::Bytes\">Bytes</a>"],["impl&lt;I&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;I&gt; for <a class=\"struct\" href=\"winnow/stream/struct.Located.html\" title=\"struct winnow::stream::Located\">Located</a>&lt;I&gt;"],["impl&lt;I, S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;I&gt; for <a class=\"struct\" href=\"winnow/stream/struct.Stateful.html\" title=\"struct winnow::stream::Stateful\">Stateful</a>&lt;I, S&gt;"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()