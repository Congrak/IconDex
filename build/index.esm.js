function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var jsxRuntime = {exports: {}};

var reactJsxRuntime_production_min = {};

var react = {exports: {}};

var react_production_min = {};

/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReact_production_min;

function requireReact_production_min () {
	if (hasRequiredReact_production_min) return react_production_min;
	hasRequiredReact_production_min = 1;
var l=Symbol.for("react.element"),n=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),t=Symbol.for("react.provider"),u=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),z=Symbol.iterator;function A(a){if(null===a||"object"!==typeof a)return null;a=z&&a[z]||a["@@iterator"];return "function"===typeof a?a:null}
	var B={isMounted:function(){return !1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,D={};function E(a,b,e){this.props=a;this.context=b;this.refs=D;this.updater=e||B;}E.prototype.isReactComponent={};
	E.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,a,b,"setState");};E.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate");};function F(){}F.prototype=E.prototype;function G(a,b,e){this.props=a;this.context=b;this.refs=D;this.updater=e||B;}var H=G.prototype=new F;
	H.constructor=G;C(H,E.prototype);H.isPureReactComponent=!0;var I=Array.isArray,J=Object.prototype.hasOwnProperty,K={current:null},L={key:!0,ref:!0,__self:!0,__source:!0};
	function M(a,b,e){var d,c={},k=null,h=null;if(null!=b)for(d in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(k=""+b.key),b)J.call(b,d)&&!L.hasOwnProperty(d)&&(c[d]=b[d]);var g=arguments.length-2;if(1===g)c.children=e;else if(1<g){for(var f=Array(g),m=0;m<g;m++)f[m]=arguments[m+2];c.children=f;}if(a&&a.defaultProps)for(d in g=a.defaultProps,g)void 0===c[d]&&(c[d]=g[d]);return {$$typeof:l,type:a,key:k,ref:h,props:c,_owner:K.current}}
	function N(a,b){return {$$typeof:l,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function O(a){return "object"===typeof a&&null!==a&&a.$$typeof===l}function escape(a){var b={"=":"=0",":":"=2"};return "$"+a.replace(/[=:]/g,function(a){return b[a]})}var P=/\/+/g;function Q(a,b){return "object"===typeof a&&null!==a&&null!=a.key?escape(""+a.key):b.toString(36)}
	function R(a,b,e,d,c){var k=typeof a;if("undefined"===k||"boolean"===k)a=null;var h=!1;if(null===a)h=!0;else switch(k){case "string":case "number":h=!0;break;case "object":switch(a.$$typeof){case l:case n:h=!0;}}if(h)return h=a,c=c(h),a=""===d?"."+Q(h,0):d,I(c)?(e="",null!=a&&(e=a.replace(P,"$&/")+"/"),R(c,b,e,"",function(a){return a})):null!=c&&(O(c)&&(c=N(c,e+(!c.key||h&&h.key===c.key?"":(""+c.key).replace(P,"$&/")+"/")+a)),b.push(c)),1;h=0;d=""===d?".":d+":";if(I(a))for(var g=0;g<a.length;g++){k=
	a[g];var f=d+Q(k,g);h+=R(k,b,e,f,c);}else if(f=A(a),"function"===typeof f)for(a=f.call(a),g=0;!(k=a.next()).done;)k=k.value,f=d+Q(k,g++),h+=R(k,b,e,f,c);else if("object"===k)throw b=String(a),Error("Objects are not valid as a React child (found: "+("[object Object]"===b?"object with keys {"+Object.keys(a).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.");return h}
	function S(a,b,e){if(null==a)return a;var d=[],c=0;R(a,d,"","",function(a){return b.call(e,a,c++)});return d}function T(a){if(-1===a._status){var b=a._result;b=b();b.then(function(b){if(0===a._status||-1===a._status)a._status=1,a._result=b;},function(b){if(0===a._status||-1===a._status)a._status=2,a._result=b;});-1===a._status&&(a._status=0,a._result=b);}if(1===a._status)return a._result.default;throw a._result;}
	var U={current:null},V={transition:null},W={ReactCurrentDispatcher:U,ReactCurrentBatchConfig:V,ReactCurrentOwner:K};react_production_min.Children={map:S,forEach:function(a,b,e){S(a,function(){b.apply(this,arguments);},e);},count:function(a){var b=0;S(a,function(){b++;});return b},toArray:function(a){return S(a,function(a){return a})||[]},only:function(a){if(!O(a))throw Error("React.Children.only expected to receive a single React element child.");return a}};react_production_min.Component=E;react_production_min.Fragment=p;
	react_production_min.Profiler=r;react_production_min.PureComponent=G;react_production_min.StrictMode=q;react_production_min.Suspense=w;react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W;
	react_production_min.cloneElement=function(a,b,e){if(null===a||void 0===a)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+a+".");var d=C({},a.props),c=a.key,k=a.ref,h=a._owner;if(null!=b){void 0!==b.ref&&(k=b.ref,h=K.current);void 0!==b.key&&(c=""+b.key);if(a.type&&a.type.defaultProps)var g=a.type.defaultProps;for(f in b)J.call(b,f)&&!L.hasOwnProperty(f)&&(d[f]=void 0===b[f]&&void 0!==g?g[f]:b[f]);}var f=arguments.length-2;if(1===f)d.children=e;else if(1<f){g=Array(f);
	for(var m=0;m<f;m++)g[m]=arguments[m+2];d.children=g;}return {$$typeof:l,type:a.type,key:c,ref:k,props:d,_owner:h}};react_production_min.createContext=function(a){a={$$typeof:u,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null};a.Provider={$$typeof:t,_context:a};return a.Consumer=a};react_production_min.createElement=M;react_production_min.createFactory=function(a){var b=M.bind(null,a);b.type=a;return b};react_production_min.createRef=function(){return {current:null}};
	react_production_min.forwardRef=function(a){return {$$typeof:v,render:a}};react_production_min.isValidElement=O;react_production_min.lazy=function(a){return {$$typeof:y,_payload:{_status:-1,_result:a},_init:T}};react_production_min.memo=function(a,b){return {$$typeof:x,type:a,compare:void 0===b?null:b}};react_production_min.startTransition=function(a){var b=V.transition;V.transition={};try{a();}finally{V.transition=b;}};react_production_min.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.");};
	react_production_min.useCallback=function(a,b){return U.current.useCallback(a,b)};react_production_min.useContext=function(a){return U.current.useContext(a)};react_production_min.useDebugValue=function(){};react_production_min.useDeferredValue=function(a){return U.current.useDeferredValue(a)};react_production_min.useEffect=function(a,b){return U.current.useEffect(a,b)};react_production_min.useId=function(){return U.current.useId()};react_production_min.useImperativeHandle=function(a,b,e){return U.current.useImperativeHandle(a,b,e)};
	react_production_min.useInsertionEffect=function(a,b){return U.current.useInsertionEffect(a,b)};react_production_min.useLayoutEffect=function(a,b){return U.current.useLayoutEffect(a,b)};react_production_min.useMemo=function(a,b){return U.current.useMemo(a,b)};react_production_min.useReducer=function(a,b,e){return U.current.useReducer(a,b,e)};react_production_min.useRef=function(a){return U.current.useRef(a)};react_production_min.useState=function(a){return U.current.useState(a)};react_production_min.useSyncExternalStore=function(a,b,e){return U.current.useSyncExternalStore(a,b,e)};
	react_production_min.useTransition=function(){return U.current.useTransition()};react_production_min.version="18.2.0";
	return react_production_min;
}

var react_development = {exports: {}};

/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
react_development.exports;

var hasRequiredReact_development;

function requireReact_development () {
	if (hasRequiredReact_development) return react_development.exports;
	hasRequiredReact_development = 1;
	(function (module, exports) {

		if (process.env.NODE_ENV !== "production") {
		  (function() {

		/* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
		if (
		  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
		  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart ===
		    'function'
		) {
		  __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
		}
		          var ReactVersion = '18.2.0';

		// ATTENTION
		// When adding new symbols to this file,
		// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
		// The Symbol used to tag the ReactElement-like types.
		var REACT_ELEMENT_TYPE = Symbol.for('react.element');
		var REACT_PORTAL_TYPE = Symbol.for('react.portal');
		var REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');
		var REACT_STRICT_MODE_TYPE = Symbol.for('react.strict_mode');
		var REACT_PROFILER_TYPE = Symbol.for('react.profiler');
		var REACT_PROVIDER_TYPE = Symbol.for('react.provider');
		var REACT_CONTEXT_TYPE = Symbol.for('react.context');
		var REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');
		var REACT_SUSPENSE_TYPE = Symbol.for('react.suspense');
		var REACT_SUSPENSE_LIST_TYPE = Symbol.for('react.suspense_list');
		var REACT_MEMO_TYPE = Symbol.for('react.memo');
		var REACT_LAZY_TYPE = Symbol.for('react.lazy');
		var REACT_OFFSCREEN_TYPE = Symbol.for('react.offscreen');
		var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
		var FAUX_ITERATOR_SYMBOL = '@@iterator';
		function getIteratorFn(maybeIterable) {
		  if (maybeIterable === null || typeof maybeIterable !== 'object') {
		    return null;
		  }

		  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

		  if (typeof maybeIterator === 'function') {
		    return maybeIterator;
		  }

		  return null;
		}

		/**
		 * Keeps track of the current dispatcher.
		 */
		var ReactCurrentDispatcher = {
		  /**
		   * @internal
		   * @type {ReactComponent}
		   */
		  current: null
		};

		/**
		 * Keeps track of the current batch's configuration such as how long an update
		 * should suspend for if it needs to.
		 */
		var ReactCurrentBatchConfig = {
		  transition: null
		};

		var ReactCurrentActQueue = {
		  current: null,
		  // Used to reproduce behavior of `batchedUpdates` in legacy mode.
		  isBatchingLegacy: false,
		  didScheduleLegacyUpdate: false
		};

		/**
		 * Keeps track of the current owner.
		 *
		 * The current owner is the component who should own any components that are
		 * currently being constructed.
		 */
		var ReactCurrentOwner = {
		  /**
		   * @internal
		   * @type {ReactComponent}
		   */
		  current: null
		};

		var ReactDebugCurrentFrame = {};
		var currentExtraStackFrame = null;
		function setExtraStackFrame(stack) {
		  {
		    currentExtraStackFrame = stack;
		  }
		}

		{
		  ReactDebugCurrentFrame.setExtraStackFrame = function (stack) {
		    {
		      currentExtraStackFrame = stack;
		    }
		  }; // Stack implementation injected by the current renderer.


		  ReactDebugCurrentFrame.getCurrentStack = null;

		  ReactDebugCurrentFrame.getStackAddendum = function () {
		    var stack = ''; // Add an extra top frame while an element is being validated

		    if (currentExtraStackFrame) {
		      stack += currentExtraStackFrame;
		    } // Delegate to the injected renderer-specific implementation


		    var impl = ReactDebugCurrentFrame.getCurrentStack;

		    if (impl) {
		      stack += impl() || '';
		    }

		    return stack;
		  };
		}

		// -----------------------------------------------------------------------------

		var enableScopeAPI = false; // Experimental Create Event Handle API.
		var enableCacheElement = false;
		var enableTransitionTracing = false; // No known bugs, but needs performance testing

		var enableLegacyHidden = false; // Enables unstable_avoidThisFallback feature in Fiber
		// stuff. Intended to enable React core members to more easily debug scheduling
		// issues in DEV builds.

		var enableDebugTracing = false; // Track which Fiber(s) schedule render work.

		var ReactSharedInternals = {
		  ReactCurrentDispatcher: ReactCurrentDispatcher,
		  ReactCurrentBatchConfig: ReactCurrentBatchConfig,
		  ReactCurrentOwner: ReactCurrentOwner
		};

		{
		  ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
		  ReactSharedInternals.ReactCurrentActQueue = ReactCurrentActQueue;
		}

		// by calls to these methods by a Babel plugin.
		//
		// In PROD (or in packages without access to React internals),
		// they are left as they are instead.

		function warn(format) {
		  {
		    {
		      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
		        args[_key - 1] = arguments[_key];
		      }

		      printWarning('warn', format, args);
		    }
		  }
		}
		function error(format) {
		  {
		    {
		      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
		        args[_key2 - 1] = arguments[_key2];
		      }

		      printWarning('error', format, args);
		    }
		  }
		}

		function printWarning(level, format, args) {
		  // When changing this logic, you might want to also
		  // update consoleWithStackDev.www.js as well.
		  {
		    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
		    var stack = ReactDebugCurrentFrame.getStackAddendum();

		    if (stack !== '') {
		      format += '%s';
		      args = args.concat([stack]);
		    } // eslint-disable-next-line react-internal/safe-string-coercion


		    var argsWithFormat = args.map(function (item) {
		      return String(item);
		    }); // Careful: RN currently depends on this prefix

		    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
		    // breaks IE9: https://github.com/facebook/react/issues/13610
		    // eslint-disable-next-line react-internal/no-production-logging

		    Function.prototype.apply.call(console[level], console, argsWithFormat);
		  }
		}

		var didWarnStateUpdateForUnmountedComponent = {};

		function warnNoop(publicInstance, callerName) {
		  {
		    var _constructor = publicInstance.constructor;
		    var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
		    var warningKey = componentName + "." + callerName;

		    if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
		      return;
		    }

		    error("Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);

		    didWarnStateUpdateForUnmountedComponent[warningKey] = true;
		  }
		}
		/**
		 * This is the abstract API for an update queue.
		 */


		var ReactNoopUpdateQueue = {
		  /**
		   * Checks whether or not this composite component is mounted.
		   * @param {ReactClass} publicInstance The instance we want to test.
		   * @return {boolean} True if mounted, false otherwise.
		   * @protected
		   * @final
		   */
		  isMounted: function (publicInstance) {
		    return false;
		  },

		  /**
		   * Forces an update. This should only be invoked when it is known with
		   * certainty that we are **not** in a DOM transaction.
		   *
		   * You may want to call this when you know that some deeper aspect of the
		   * component's state has changed but `setState` was not called.
		   *
		   * This will not invoke `shouldComponentUpdate`, but it will invoke
		   * `componentWillUpdate` and `componentDidUpdate`.
		   *
		   * @param {ReactClass} publicInstance The instance that should rerender.
		   * @param {?function} callback Called after component is updated.
		   * @param {?string} callerName name of the calling function in the public API.
		   * @internal
		   */
		  enqueueForceUpdate: function (publicInstance, callback, callerName) {
		    warnNoop(publicInstance, 'forceUpdate');
		  },

		  /**
		   * Replaces all of the state. Always use this or `setState` to mutate state.
		   * You should treat `this.state` as immutable.
		   *
		   * There is no guarantee that `this.state` will be immediately updated, so
		   * accessing `this.state` after calling this method may return the old value.
		   *
		   * @param {ReactClass} publicInstance The instance that should rerender.
		   * @param {object} completeState Next state.
		   * @param {?function} callback Called after component is updated.
		   * @param {?string} callerName name of the calling function in the public API.
		   * @internal
		   */
		  enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
		    warnNoop(publicInstance, 'replaceState');
		  },

		  /**
		   * Sets a subset of the state. This only exists because _pendingState is
		   * internal. This provides a merging strategy that is not available to deep
		   * properties which is confusing. TODO: Expose pendingState or don't use it
		   * during the merge.
		   *
		   * @param {ReactClass} publicInstance The instance that should rerender.
		   * @param {object} partialState Next partial state to be merged with state.
		   * @param {?function} callback Called after component is updated.
		   * @param {?string} Name of the calling function in the public API.
		   * @internal
		   */
		  enqueueSetState: function (publicInstance, partialState, callback, callerName) {
		    warnNoop(publicInstance, 'setState');
		  }
		};

		var assign = Object.assign;

		var emptyObject = {};

		{
		  Object.freeze(emptyObject);
		}
		/**
		 * Base class helpers for the updating state of a component.
		 */


		function Component(props, context, updater) {
		  this.props = props;
		  this.context = context; // If a component has string refs, we will assign a different object later.

		  this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the
		  // renderer.

		  this.updater = updater || ReactNoopUpdateQueue;
		}

		Component.prototype.isReactComponent = {};
		/**
		 * Sets a subset of the state. Always use this to mutate
		 * state. You should treat `this.state` as immutable.
		 *
		 * There is no guarantee that `this.state` will be immediately updated, so
		 * accessing `this.state` after calling this method may return the old value.
		 *
		 * There is no guarantee that calls to `setState` will run synchronously,
		 * as they may eventually be batched together.  You can provide an optional
		 * callback that will be executed when the call to setState is actually
		 * completed.
		 *
		 * When a function is provided to setState, it will be called at some point in
		 * the future (not synchronously). It will be called with the up to date
		 * component arguments (state, props, context). These values can be different
		 * from this.* because your function may be called after receiveProps but before
		 * shouldComponentUpdate, and this new state, props, and context will not yet be
		 * assigned to this.
		 *
		 * @param {object|function} partialState Next partial state or function to
		 *        produce next partial state to be merged with current state.
		 * @param {?function} callback Called after state is updated.
		 * @final
		 * @protected
		 */

		Component.prototype.setState = function (partialState, callback) {
		  if (typeof partialState !== 'object' && typeof partialState !== 'function' && partialState != null) {
		    throw new Error('setState(...): takes an object of state variables to update or a ' + 'function which returns an object of state variables.');
		  }

		  this.updater.enqueueSetState(this, partialState, callback, 'setState');
		};
		/**
		 * Forces an update. This should only be invoked when it is known with
		 * certainty that we are **not** in a DOM transaction.
		 *
		 * You may want to call this when you know that some deeper aspect of the
		 * component's state has changed but `setState` was not called.
		 *
		 * This will not invoke `shouldComponentUpdate`, but it will invoke
		 * `componentWillUpdate` and `componentDidUpdate`.
		 *
		 * @param {?function} callback Called after update is complete.
		 * @final
		 * @protected
		 */


		Component.prototype.forceUpdate = function (callback) {
		  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
		};
		/**
		 * Deprecated APIs. These APIs used to exist on classic React classes but since
		 * we would like to deprecate them, we're not going to move them over to this
		 * modern base class. Instead, we define a getter that warns if it's accessed.
		 */


		{
		  var deprecatedAPIs = {
		    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
		    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
		  };

		  var defineDeprecationWarning = function (methodName, info) {
		    Object.defineProperty(Component.prototype, methodName, {
		      get: function () {
		        warn('%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);

		        return undefined;
		      }
		    });
		  };

		  for (var fnName in deprecatedAPIs) {
		    if (deprecatedAPIs.hasOwnProperty(fnName)) {
		      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
		    }
		  }
		}

		function ComponentDummy() {}

		ComponentDummy.prototype = Component.prototype;
		/**
		 * Convenience component with default shallow equality check for sCU.
		 */

		function PureComponent(props, context, updater) {
		  this.props = props;
		  this.context = context; // If a component has string refs, we will assign a different object later.

		  this.refs = emptyObject;
		  this.updater = updater || ReactNoopUpdateQueue;
		}

		var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
		pureComponentPrototype.constructor = PureComponent; // Avoid an extra prototype jump for these methods.

		assign(pureComponentPrototype, Component.prototype);
		pureComponentPrototype.isPureReactComponent = true;

		// an immutable object with a single mutable value
		function createRef() {
		  var refObject = {
		    current: null
		  };

		  {
		    Object.seal(refObject);
		  }

		  return refObject;
		}

		var isArrayImpl = Array.isArray; // eslint-disable-next-line no-redeclare

		function isArray(a) {
		  return isArrayImpl(a);
		}

		/*
		 * The `'' + value` pattern (used in in perf-sensitive code) throws for Symbol
		 * and Temporal.* types. See https://github.com/facebook/react/pull/22064.
		 *
		 * The functions in this module will throw an easier-to-understand,
		 * easier-to-debug exception with a clear errors message message explaining the
		 * problem. (Instead of a confusing exception thrown inside the implementation
		 * of the `value` object).
		 */
		// $FlowFixMe only called in DEV, so void return is not possible.
		function typeName(value) {
		  {
		    // toStringTag is needed for namespaced types like Temporal.Instant
		    var hasToStringTag = typeof Symbol === 'function' && Symbol.toStringTag;
		    var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || 'Object';
		    return type;
		  }
		} // $FlowFixMe only called in DEV, so void return is not possible.


		function willCoercionThrow(value) {
		  {
		    try {
		      testStringCoercion(value);
		      return false;
		    } catch (e) {
		      return true;
		    }
		  }
		}

		function testStringCoercion(value) {
		  // If you ended up here by following an exception call stack, here's what's
		  // happened: you supplied an object or symbol value to React (as a prop, key,
		  // DOM attribute, CSS property, string ref, etc.) and when React tried to
		  // coerce it to a string using `'' + value`, an exception was thrown.
		  //
		  // The most common types that will cause this exception are `Symbol` instances
		  // and Temporal objects like `Temporal.Instant`. But any object that has a
		  // `valueOf` or `[Symbol.toPrimitive]` method that throws will also cause this
		  // exception. (Library authors do this to prevent users from using built-in
		  // numeric operators like `+` or comparison operators like `>=` because custom
		  // methods are needed to perform accurate arithmetic or comparison.)
		  //
		  // To fix the problem, coerce this object or symbol value to a string before
		  // passing it to React. The most reliable way is usually `String(value)`.
		  //
		  // To find which value is throwing, check the browser or debugger console.
		  // Before this exception was thrown, there should be `console.error` output
		  // that shows the type (Symbol, Temporal.PlainDate, etc.) that caused the
		  // problem and how that type was used: key, atrribute, input value prop, etc.
		  // In most cases, this console output also shows the component and its
		  // ancestor components where the exception happened.
		  //
		  // eslint-disable-next-line react-internal/safe-string-coercion
		  return '' + value;
		}
		function checkKeyStringCoercion(value) {
		  {
		    if (willCoercionThrow(value)) {
		      error('The provided key is an unsupported type %s.' + ' This value must be coerced to a string before before using it here.', typeName(value));

		      return testStringCoercion(value); // throw (to help callers find troubleshooting comments)
		    }
		  }
		}

		function getWrappedName(outerType, innerType, wrapperName) {
		  var displayName = outerType.displayName;

		  if (displayName) {
		    return displayName;
		  }

		  var functionName = innerType.displayName || innerType.name || '';
		  return functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName;
		} // Keep in sync with react-reconciler/getComponentNameFromFiber


		function getContextName(type) {
		  return type.displayName || 'Context';
		} // Note that the reconciler package should generally prefer to use getComponentNameFromFiber() instead.


		function getComponentNameFromType(type) {
		  if (type == null) {
		    // Host root, text node or just invalid type.
		    return null;
		  }

		  {
		    if (typeof type.tag === 'number') {
		      error('Received an unexpected object in getComponentNameFromType(). ' + 'This is likely a bug in React. Please file an issue.');
		    }
		  }

		  if (typeof type === 'function') {
		    return type.displayName || type.name || null;
		  }

		  if (typeof type === 'string') {
		    return type;
		  }

		  switch (type) {
		    case REACT_FRAGMENT_TYPE:
		      return 'Fragment';

		    case REACT_PORTAL_TYPE:
		      return 'Portal';

		    case REACT_PROFILER_TYPE:
		      return 'Profiler';

		    case REACT_STRICT_MODE_TYPE:
		      return 'StrictMode';

		    case REACT_SUSPENSE_TYPE:
		      return 'Suspense';

		    case REACT_SUSPENSE_LIST_TYPE:
		      return 'SuspenseList';

		  }

		  if (typeof type === 'object') {
		    switch (type.$$typeof) {
		      case REACT_CONTEXT_TYPE:
		        var context = type;
		        return getContextName(context) + '.Consumer';

		      case REACT_PROVIDER_TYPE:
		        var provider = type;
		        return getContextName(provider._context) + '.Provider';

		      case REACT_FORWARD_REF_TYPE:
		        return getWrappedName(type, type.render, 'ForwardRef');

		      case REACT_MEMO_TYPE:
		        var outerName = type.displayName || null;

		        if (outerName !== null) {
		          return outerName;
		        }

		        return getComponentNameFromType(type.type) || 'Memo';

		      case REACT_LAZY_TYPE:
		        {
		          var lazyComponent = type;
		          var payload = lazyComponent._payload;
		          var init = lazyComponent._init;

		          try {
		            return getComponentNameFromType(init(payload));
		          } catch (x) {
		            return null;
		          }
		        }

		      // eslint-disable-next-line no-fallthrough
		    }
		  }

		  return null;
		}

		var hasOwnProperty = Object.prototype.hasOwnProperty;

		var RESERVED_PROPS = {
		  key: true,
		  ref: true,
		  __self: true,
		  __source: true
		};
		var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;

		{
		  didWarnAboutStringRefs = {};
		}

		function hasValidRef(config) {
		  {
		    if (hasOwnProperty.call(config, 'ref')) {
		      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

		      if (getter && getter.isReactWarning) {
		        return false;
		      }
		    }
		  }

		  return config.ref !== undefined;
		}

		function hasValidKey(config) {
		  {
		    if (hasOwnProperty.call(config, 'key')) {
		      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

		      if (getter && getter.isReactWarning) {
		        return false;
		      }
		    }
		  }

		  return config.key !== undefined;
		}

		function defineKeyPropWarningGetter(props, displayName) {
		  var warnAboutAccessingKey = function () {
		    {
		      if (!specialPropKeyWarningShown) {
		        specialPropKeyWarningShown = true;

		        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
		      }
		    }
		  };

		  warnAboutAccessingKey.isReactWarning = true;
		  Object.defineProperty(props, 'key', {
		    get: warnAboutAccessingKey,
		    configurable: true
		  });
		}

		function defineRefPropWarningGetter(props, displayName) {
		  var warnAboutAccessingRef = function () {
		    {
		      if (!specialPropRefWarningShown) {
		        specialPropRefWarningShown = true;

		        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
		      }
		    }
		  };

		  warnAboutAccessingRef.isReactWarning = true;
		  Object.defineProperty(props, 'ref', {
		    get: warnAboutAccessingRef,
		    configurable: true
		  });
		}

		function warnIfStringRefCannotBeAutoConverted(config) {
		  {
		    if (typeof config.ref === 'string' && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
		      var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);

		      if (!didWarnAboutStringRefs[componentName]) {
		        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', componentName, config.ref);

		        didWarnAboutStringRefs[componentName] = true;
		      }
		    }
		  }
		}
		/**
		 * Factory method to create a new React element. This no longer adheres to
		 * the class pattern, so do not use new to call it. Also, instanceof check
		 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
		 * if something is a React Element.
		 *
		 * @param {*} type
		 * @param {*} props
		 * @param {*} key
		 * @param {string|object} ref
		 * @param {*} owner
		 * @param {*} self A *temporary* helper to detect places where `this` is
		 * different from the `owner` when React.createElement is called, so that we
		 * can warn. We want to get rid of owner and replace string `ref`s with arrow
		 * functions, and as long as `this` and owner are the same, there will be no
		 * change in behavior.
		 * @param {*} source An annotation object (added by a transpiler or otherwise)
		 * indicating filename, line number, and/or other information.
		 * @internal
		 */


		var ReactElement = function (type, key, ref, self, source, owner, props) {
		  var element = {
		    // This tag allows us to uniquely identify this as a React Element
		    $$typeof: REACT_ELEMENT_TYPE,
		    // Built-in properties that belong on the element
		    type: type,
		    key: key,
		    ref: ref,
		    props: props,
		    // Record the component responsible for creating this element.
		    _owner: owner
		  };

		  {
		    // The validation flag is currently mutative. We put it on
		    // an external backing store so that we can freeze the whole object.
		    // This can be replaced with a WeakMap once they are implemented in
		    // commonly used development environments.
		    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
		    // the validation flag non-enumerable (where possible, which should
		    // include every environment we run tests in), so the test framework
		    // ignores it.

		    Object.defineProperty(element._store, 'validated', {
		      configurable: false,
		      enumerable: false,
		      writable: true,
		      value: false
		    }); // self and source are DEV only properties.

		    Object.defineProperty(element, '_self', {
		      configurable: false,
		      enumerable: false,
		      writable: false,
		      value: self
		    }); // Two elements created in two different places should be considered
		    // equal for testing purposes and therefore we hide it from enumeration.

		    Object.defineProperty(element, '_source', {
		      configurable: false,
		      enumerable: false,
		      writable: false,
		      value: source
		    });

		    if (Object.freeze) {
		      Object.freeze(element.props);
		      Object.freeze(element);
		    }
		  }

		  return element;
		};
		/**
		 * Create and return a new ReactElement of the given type.
		 * See https://reactjs.org/docs/react-api.html#createelement
		 */

		function createElement(type, config, children) {
		  var propName; // Reserved names are extracted

		  var props = {};
		  var key = null;
		  var ref = null;
		  var self = null;
		  var source = null;

		  if (config != null) {
		    if (hasValidRef(config)) {
		      ref = config.ref;

		      {
		        warnIfStringRefCannotBeAutoConverted(config);
		      }
		    }

		    if (hasValidKey(config)) {
		      {
		        checkKeyStringCoercion(config.key);
		      }

		      key = '' + config.key;
		    }

		    self = config.__self === undefined ? null : config.__self;
		    source = config.__source === undefined ? null : config.__source; // Remaining properties are added to a new props object

		    for (propName in config) {
		      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
		        props[propName] = config[propName];
		      }
		    }
		  } // Children can be more than one argument, and those are transferred onto
		  // the newly allocated props object.


		  var childrenLength = arguments.length - 2;

		  if (childrenLength === 1) {
		    props.children = children;
		  } else if (childrenLength > 1) {
		    var childArray = Array(childrenLength);

		    for (var i = 0; i < childrenLength; i++) {
		      childArray[i] = arguments[i + 2];
		    }

		    {
		      if (Object.freeze) {
		        Object.freeze(childArray);
		      }
		    }

		    props.children = childArray;
		  } // Resolve default props


		  if (type && type.defaultProps) {
		    var defaultProps = type.defaultProps;

		    for (propName in defaultProps) {
		      if (props[propName] === undefined) {
		        props[propName] = defaultProps[propName];
		      }
		    }
		  }

		  {
		    if (key || ref) {
		      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

		      if (key) {
		        defineKeyPropWarningGetter(props, displayName);
		      }

		      if (ref) {
		        defineRefPropWarningGetter(props, displayName);
		      }
		    }
		  }

		  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
		}
		function cloneAndReplaceKey(oldElement, newKey) {
		  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
		  return newElement;
		}
		/**
		 * Clone and return a new ReactElement using element as the starting point.
		 * See https://reactjs.org/docs/react-api.html#cloneelement
		 */

		function cloneElement(element, config, children) {
		  if (element === null || element === undefined) {
		    throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + element + ".");
		  }

		  var propName; // Original props are copied

		  var props = assign({}, element.props); // Reserved names are extracted

		  var key = element.key;
		  var ref = element.ref; // Self is preserved since the owner is preserved.

		  var self = element._self; // Source is preserved since cloneElement is unlikely to be targeted by a
		  // transpiler, and the original source is probably a better indicator of the
		  // true owner.

		  var source = element._source; // Owner will be preserved, unless ref is overridden

		  var owner = element._owner;

		  if (config != null) {
		    if (hasValidRef(config)) {
		      // Silently steal the ref from the parent.
		      ref = config.ref;
		      owner = ReactCurrentOwner.current;
		    }

		    if (hasValidKey(config)) {
		      {
		        checkKeyStringCoercion(config.key);
		      }

		      key = '' + config.key;
		    } // Remaining properties override existing props


		    var defaultProps;

		    if (element.type && element.type.defaultProps) {
		      defaultProps = element.type.defaultProps;
		    }

		    for (propName in config) {
		      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
		        if (config[propName] === undefined && defaultProps !== undefined) {
		          // Resolve default props
		          props[propName] = defaultProps[propName];
		        } else {
		          props[propName] = config[propName];
		        }
		      }
		    }
		  } // Children can be more than one argument, and those are transferred onto
		  // the newly allocated props object.


		  var childrenLength = arguments.length - 2;

		  if (childrenLength === 1) {
		    props.children = children;
		  } else if (childrenLength > 1) {
		    var childArray = Array(childrenLength);

		    for (var i = 0; i < childrenLength; i++) {
		      childArray[i] = arguments[i + 2];
		    }

		    props.children = childArray;
		  }

		  return ReactElement(element.type, key, ref, self, source, owner, props);
		}
		/**
		 * Verifies the object is a ReactElement.
		 * See https://reactjs.org/docs/react-api.html#isvalidelement
		 * @param {?object} object
		 * @return {boolean} True if `object` is a ReactElement.
		 * @final
		 */

		function isValidElement(object) {
		  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
		}

		var SEPARATOR = '.';
		var SUBSEPARATOR = ':';
		/**
		 * Escape and wrap key so it is safe to use as a reactid
		 *
		 * @param {string} key to be escaped.
		 * @return {string} the escaped key.
		 */

		function escape(key) {
		  var escapeRegex = /[=:]/g;
		  var escaperLookup = {
		    '=': '=0',
		    ':': '=2'
		  };
		  var escapedString = key.replace(escapeRegex, function (match) {
		    return escaperLookup[match];
		  });
		  return '$' + escapedString;
		}
		/**
		 * TODO: Test that a single child and an array with one item have the same key
		 * pattern.
		 */


		var didWarnAboutMaps = false;
		var userProvidedKeyEscapeRegex = /\/+/g;

		function escapeUserProvidedKey(text) {
		  return text.replace(userProvidedKeyEscapeRegex, '$&/');
		}
		/**
		 * Generate a key string that identifies a element within a set.
		 *
		 * @param {*} element A element that could contain a manual key.
		 * @param {number} index Index that is used if a manual key is not provided.
		 * @return {string}
		 */


		function getElementKey(element, index) {
		  // Do some typechecking here since we call this blindly. We want to ensure
		  // that we don't block potential future ES APIs.
		  if (typeof element === 'object' && element !== null && element.key != null) {
		    // Explicit key
		    {
		      checkKeyStringCoercion(element.key);
		    }

		    return escape('' + element.key);
		  } // Implicit key determined by the index in the set


		  return index.toString(36);
		}

		function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
		  var type = typeof children;

		  if (type === 'undefined' || type === 'boolean') {
		    // All of the above are perceived as null.
		    children = null;
		  }

		  var invokeCallback = false;

		  if (children === null) {
		    invokeCallback = true;
		  } else {
		    switch (type) {
		      case 'string':
		      case 'number':
		        invokeCallback = true;
		        break;

		      case 'object':
		        switch (children.$$typeof) {
		          case REACT_ELEMENT_TYPE:
		          case REACT_PORTAL_TYPE:
		            invokeCallback = true;
		        }

		    }
		  }

		  if (invokeCallback) {
		    var _child = children;
		    var mappedChild = callback(_child); // If it's the only child, treat the name as if it was wrapped in an array
		    // so that it's consistent if the number of children grows:

		    var childKey = nameSoFar === '' ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;

		    if (isArray(mappedChild)) {
		      var escapedChildKey = '';

		      if (childKey != null) {
		        escapedChildKey = escapeUserProvidedKey(childKey) + '/';
		      }

		      mapIntoArray(mappedChild, array, escapedChildKey, '', function (c) {
		        return c;
		      });
		    } else if (mappedChild != null) {
		      if (isValidElement(mappedChild)) {
		        {
		          // The `if` statement here prevents auto-disabling of the safe
		          // coercion ESLint rule, so we must manually disable it below.
		          // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
		          if (mappedChild.key && (!_child || _child.key !== mappedChild.key)) {
		            checkKeyStringCoercion(mappedChild.key);
		          }
		        }

		        mappedChild = cloneAndReplaceKey(mappedChild, // Keep both the (mapped) and old keys if they differ, just as
		        // traverseAllChildren used to do for objects as children
		        escapedPrefix + ( // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
		        mappedChild.key && (!_child || _child.key !== mappedChild.key) ? // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
		        // eslint-disable-next-line react-internal/safe-string-coercion
		        escapeUserProvidedKey('' + mappedChild.key) + '/' : '') + childKey);
		      }

		      array.push(mappedChild);
		    }

		    return 1;
		  }

		  var child;
		  var nextName;
		  var subtreeCount = 0; // Count of children found in the current subtree.

		  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

		  if (isArray(children)) {
		    for (var i = 0; i < children.length; i++) {
		      child = children[i];
		      nextName = nextNamePrefix + getElementKey(child, i);
		      subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
		    }
		  } else {
		    var iteratorFn = getIteratorFn(children);

		    if (typeof iteratorFn === 'function') {
		      var iterableChildren = children;

		      {
		        // Warn about using Maps as children
		        if (iteratorFn === iterableChildren.entries) {
		          if (!didWarnAboutMaps) {
		            warn('Using Maps as children is not supported. ' + 'Use an array of keyed ReactElements instead.');
		          }

		          didWarnAboutMaps = true;
		        }
		      }

		      var iterator = iteratorFn.call(iterableChildren);
		      var step;
		      var ii = 0;

		      while (!(step = iterator.next()).done) {
		        child = step.value;
		        nextName = nextNamePrefix + getElementKey(child, ii++);
		        subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
		      }
		    } else if (type === 'object') {
		      // eslint-disable-next-line react-internal/safe-string-coercion
		      var childrenString = String(children);
		      throw new Error("Objects are not valid as a React child (found: " + (childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString) + "). " + 'If you meant to render a collection of children, use an array ' + 'instead.');
		    }
		  }

		  return subtreeCount;
		}

		/**
		 * Maps children that are typically specified as `props.children`.
		 *
		 * See https://reactjs.org/docs/react-api.html#reactchildrenmap
		 *
		 * The provided mapFunction(child, index) will be called for each
		 * leaf child.
		 *
		 * @param {?*} children Children tree container.
		 * @param {function(*, int)} func The map function.
		 * @param {*} context Context for mapFunction.
		 * @return {object} Object containing the ordered map of results.
		 */
		function mapChildren(children, func, context) {
		  if (children == null) {
		    return children;
		  }

		  var result = [];
		  var count = 0;
		  mapIntoArray(children, result, '', '', function (child) {
		    return func.call(context, child, count++);
		  });
		  return result;
		}
		/**
		 * Count the number of children that are typically specified as
		 * `props.children`.
		 *
		 * See https://reactjs.org/docs/react-api.html#reactchildrencount
		 *
		 * @param {?*} children Children tree container.
		 * @return {number} The number of children.
		 */


		function countChildren(children) {
		  var n = 0;
		  mapChildren(children, function () {
		    n++; // Don't return anything
		  });
		  return n;
		}

		/**
		 * Iterates through children that are typically specified as `props.children`.
		 *
		 * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
		 *
		 * The provided forEachFunc(child, index) will be called for each
		 * leaf child.
		 *
		 * @param {?*} children Children tree container.
		 * @param {function(*, int)} forEachFunc
		 * @param {*} forEachContext Context for forEachContext.
		 */
		function forEachChildren(children, forEachFunc, forEachContext) {
		  mapChildren(children, function () {
		    forEachFunc.apply(this, arguments); // Don't return anything.
		  }, forEachContext);
		}
		/**
		 * Flatten a children object (typically specified as `props.children`) and
		 * return an array with appropriately re-keyed children.
		 *
		 * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
		 */


		function toArray(children) {
		  return mapChildren(children, function (child) {
		    return child;
		  }) || [];
		}
		/**
		 * Returns the first child in a collection of children and verifies that there
		 * is only one child in the collection.
		 *
		 * See https://reactjs.org/docs/react-api.html#reactchildrenonly
		 *
		 * The current implementation of this function assumes that a single child gets
		 * passed without a wrapper, but the purpose of this helper function is to
		 * abstract away the particular structure of children.
		 *
		 * @param {?object} children Child collection structure.
		 * @return {ReactElement} The first and only `ReactElement` contained in the
		 * structure.
		 */


		function onlyChild(children) {
		  if (!isValidElement(children)) {
		    throw new Error('React.Children.only expected to receive a single React element child.');
		  }

		  return children;
		}

		function createContext(defaultValue) {
		  // TODO: Second argument used to be an optional `calculateChangedBits`
		  // function. Warn to reserve for future use?
		  var context = {
		    $$typeof: REACT_CONTEXT_TYPE,
		    // As a workaround to support multiple concurrent renderers, we categorize
		    // some renderers as primary and others as secondary. We only expect
		    // there to be two concurrent renderers at most: React Native (primary) and
		    // Fabric (secondary); React DOM (primary) and React ART (secondary).
		    // Secondary renderers store their context values on separate fields.
		    _currentValue: defaultValue,
		    _currentValue2: defaultValue,
		    // Used to track how many concurrent renderers this context currently
		    // supports within in a single renderer. Such as parallel server rendering.
		    _threadCount: 0,
		    // These are circular
		    Provider: null,
		    Consumer: null,
		    // Add these to use same hidden class in VM as ServerContext
		    _defaultValue: null,
		    _globalName: null
		  };
		  context.Provider = {
		    $$typeof: REACT_PROVIDER_TYPE,
		    _context: context
		  };
		  var hasWarnedAboutUsingNestedContextConsumers = false;
		  var hasWarnedAboutUsingConsumerProvider = false;
		  var hasWarnedAboutDisplayNameOnConsumer = false;

		  {
		    // A separate object, but proxies back to the original context object for
		    // backwards compatibility. It has a different $$typeof, so we can properly
		    // warn for the incorrect usage of Context as a Consumer.
		    var Consumer = {
		      $$typeof: REACT_CONTEXT_TYPE,
		      _context: context
		    }; // $FlowFixMe: Flow complains about not setting a value, which is intentional here

		    Object.defineProperties(Consumer, {
		      Provider: {
		        get: function () {
		          if (!hasWarnedAboutUsingConsumerProvider) {
		            hasWarnedAboutUsingConsumerProvider = true;

		            error('Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?');
		          }

		          return context.Provider;
		        },
		        set: function (_Provider) {
		          context.Provider = _Provider;
		        }
		      },
		      _currentValue: {
		        get: function () {
		          return context._currentValue;
		        },
		        set: function (_currentValue) {
		          context._currentValue = _currentValue;
		        }
		      },
		      _currentValue2: {
		        get: function () {
		          return context._currentValue2;
		        },
		        set: function (_currentValue2) {
		          context._currentValue2 = _currentValue2;
		        }
		      },
		      _threadCount: {
		        get: function () {
		          return context._threadCount;
		        },
		        set: function (_threadCount) {
		          context._threadCount = _threadCount;
		        }
		      },
		      Consumer: {
		        get: function () {
		          if (!hasWarnedAboutUsingNestedContextConsumers) {
		            hasWarnedAboutUsingNestedContextConsumers = true;

		            error('Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
		          }

		          return context.Consumer;
		        }
		      },
		      displayName: {
		        get: function () {
		          return context.displayName;
		        },
		        set: function (displayName) {
		          if (!hasWarnedAboutDisplayNameOnConsumer) {
		            warn('Setting `displayName` on Context.Consumer has no effect. ' + "You should set it directly on the context with Context.displayName = '%s'.", displayName);

		            hasWarnedAboutDisplayNameOnConsumer = true;
		          }
		        }
		      }
		    }); // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty

		    context.Consumer = Consumer;
		  }

		  {
		    context._currentRenderer = null;
		    context._currentRenderer2 = null;
		  }

		  return context;
		}

		var Uninitialized = -1;
		var Pending = 0;
		var Resolved = 1;
		var Rejected = 2;

		function lazyInitializer(payload) {
		  if (payload._status === Uninitialized) {
		    var ctor = payload._result;
		    var thenable = ctor(); // Transition to the next state.
		    // This might throw either because it's missing or throws. If so, we treat it
		    // as still uninitialized and try again next time. Which is the same as what
		    // happens if the ctor or any wrappers processing the ctor throws. This might
		    // end up fixing it if the resolution was a concurrency bug.

		    thenable.then(function (moduleObject) {
		      if (payload._status === Pending || payload._status === Uninitialized) {
		        // Transition to the next state.
		        var resolved = payload;
		        resolved._status = Resolved;
		        resolved._result = moduleObject;
		      }
		    }, function (error) {
		      if (payload._status === Pending || payload._status === Uninitialized) {
		        // Transition to the next state.
		        var rejected = payload;
		        rejected._status = Rejected;
		        rejected._result = error;
		      }
		    });

		    if (payload._status === Uninitialized) {
		      // In case, we're still uninitialized, then we're waiting for the thenable
		      // to resolve. Set it as pending in the meantime.
		      var pending = payload;
		      pending._status = Pending;
		      pending._result = thenable;
		    }
		  }

		  if (payload._status === Resolved) {
		    var moduleObject = payload._result;

		    {
		      if (moduleObject === undefined) {
		        error('lazy: Expected the result of a dynamic imp' + 'ort() call. ' + 'Instead received: %s\n\nYour code should look like: \n  ' + // Break up imports to avoid accidentally parsing them as dependencies.
		        'const MyComponent = lazy(() => imp' + "ort('./MyComponent'))\n\n" + 'Did you accidentally put curly braces around the import?', moduleObject);
		      }
		    }

		    {
		      if (!('default' in moduleObject)) {
		        error('lazy: Expected the result of a dynamic imp' + 'ort() call. ' + 'Instead received: %s\n\nYour code should look like: \n  ' + // Break up imports to avoid accidentally parsing them as dependencies.
		        'const MyComponent = lazy(() => imp' + "ort('./MyComponent'))", moduleObject);
		      }
		    }

		    return moduleObject.default;
		  } else {
		    throw payload._result;
		  }
		}

		function lazy(ctor) {
		  var payload = {
		    // We use these fields to store the result.
		    _status: Uninitialized,
		    _result: ctor
		  };
		  var lazyType = {
		    $$typeof: REACT_LAZY_TYPE,
		    _payload: payload,
		    _init: lazyInitializer
		  };

		  {
		    // In production, this would just set it on the object.
		    var defaultProps;
		    var propTypes; // $FlowFixMe

		    Object.defineProperties(lazyType, {
		      defaultProps: {
		        configurable: true,
		        get: function () {
		          return defaultProps;
		        },
		        set: function (newDefaultProps) {
		          error('React.lazy(...): It is not supported to assign `defaultProps` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

		          defaultProps = newDefaultProps; // Match production behavior more closely:
		          // $FlowFixMe

		          Object.defineProperty(lazyType, 'defaultProps', {
		            enumerable: true
		          });
		        }
		      },
		      propTypes: {
		        configurable: true,
		        get: function () {
		          return propTypes;
		        },
		        set: function (newPropTypes) {
		          error('React.lazy(...): It is not supported to assign `propTypes` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

		          propTypes = newPropTypes; // Match production behavior more closely:
		          // $FlowFixMe

		          Object.defineProperty(lazyType, 'propTypes', {
		            enumerable: true
		          });
		        }
		      }
		    });
		  }

		  return lazyType;
		}

		function forwardRef(render) {
		  {
		    if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
		      error('forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');
		    } else if (typeof render !== 'function') {
		      error('forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);
		    } else {
		      if (render.length !== 0 && render.length !== 2) {
		        error('forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.');
		      }
		    }

		    if (render != null) {
		      if (render.defaultProps != null || render.propTypes != null) {
		        error('forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?');
		      }
		    }
		  }

		  var elementType = {
		    $$typeof: REACT_FORWARD_REF_TYPE,
		    render: render
		  };

		  {
		    var ownName;
		    Object.defineProperty(elementType, 'displayName', {
		      enumerable: false,
		      configurable: true,
		      get: function () {
		        return ownName;
		      },
		      set: function (name) {
		        ownName = name; // The inner component shouldn't inherit this display name in most cases,
		        // because the component may be used elsewhere.
		        // But it's nice for anonymous functions to inherit the name,
		        // so that our component-stack generation logic will display their frames.
		        // An anonymous function generally suggests a pattern like:
		        //   React.forwardRef((props, ref) => {...});
		        // This kind of inner function is not used elsewhere so the side effect is okay.

		        if (!render.name && !render.displayName) {
		          render.displayName = name;
		        }
		      }
		    });
		  }

		  return elementType;
		}

		var REACT_MODULE_REFERENCE;

		{
		  REACT_MODULE_REFERENCE = Symbol.for('react.module.reference');
		}

		function isValidElementType(type) {
		  if (typeof type === 'string' || typeof type === 'function') {
		    return true;
		  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


		  if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing  || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden  || type === REACT_OFFSCREEN_TYPE || enableScopeAPI  || enableCacheElement  || enableTransitionTracing ) {
		    return true;
		  }

		  if (typeof type === 'object' && type !== null) {
		    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
		    // types supported by any Flight configuration anywhere since
		    // we don't know which Flight build this will end up being used
		    // with.
		    type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== undefined) {
		      return true;
		    }
		  }

		  return false;
		}

		function memo(type, compare) {
		  {
		    if (!isValidElementType(type)) {
		      error('memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : typeof type);
		    }
		  }

		  var elementType = {
		    $$typeof: REACT_MEMO_TYPE,
		    type: type,
		    compare: compare === undefined ? null : compare
		  };

		  {
		    var ownName;
		    Object.defineProperty(elementType, 'displayName', {
		      enumerable: false,
		      configurable: true,
		      get: function () {
		        return ownName;
		      },
		      set: function (name) {
		        ownName = name; // The inner component shouldn't inherit this display name in most cases,
		        // because the component may be used elsewhere.
		        // But it's nice for anonymous functions to inherit the name,
		        // so that our component-stack generation logic will display their frames.
		        // An anonymous function generally suggests a pattern like:
		        //   React.memo((props) => {...});
		        // This kind of inner function is not used elsewhere so the side effect is okay.

		        if (!type.name && !type.displayName) {
		          type.displayName = name;
		        }
		      }
		    });
		  }

		  return elementType;
		}

		function resolveDispatcher() {
		  var dispatcher = ReactCurrentDispatcher.current;

		  {
		    if (dispatcher === null) {
		      error('Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for' + ' one of the following reasons:\n' + '1. You might have mismatching versions of React and the renderer (such as React DOM)\n' + '2. You might be breaking the Rules of Hooks\n' + '3. You might have more than one copy of React in the same app\n' + 'See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.');
		    }
		  } // Will result in a null access error if accessed outside render phase. We
		  // intentionally don't throw our own error because this is in a hot path.
		  // Also helps ensure this is inlined.


		  return dispatcher;
		}
		function useContext(Context) {
		  var dispatcher = resolveDispatcher();

		  {
		    // TODO: add a more generic warning for invalid values.
		    if (Context._context !== undefined) {
		      var realContext = Context._context; // Don't deduplicate because this legitimately causes bugs
		      // and nobody should be using this in existing code.

		      if (realContext.Consumer === Context) {
		        error('Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');
		      } else if (realContext.Provider === Context) {
		        error('Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');
		      }
		    }
		  }

		  return dispatcher.useContext(Context);
		}
		function useState(initialState) {
		  var dispatcher = resolveDispatcher();
		  return dispatcher.useState(initialState);
		}
		function useReducer(reducer, initialArg, init) {
		  var dispatcher = resolveDispatcher();
		  return dispatcher.useReducer(reducer, initialArg, init);
		}
		function useRef(initialValue) {
		  var dispatcher = resolveDispatcher();
		  return dispatcher.useRef(initialValue);
		}
		function useEffect(create, deps) {
		  var dispatcher = resolveDispatcher();
		  return dispatcher.useEffect(create, deps);
		}
		function useInsertionEffect(create, deps) {
		  var dispatcher = resolveDispatcher();
		  return dispatcher.useInsertionEffect(create, deps);
		}
		function useLayoutEffect(create, deps) {
		  var dispatcher = resolveDispatcher();
		  return dispatcher.useLayoutEffect(create, deps);
		}
		function useCallback(callback, deps) {
		  var dispatcher = resolveDispatcher();
		  return dispatcher.useCallback(callback, deps);
		}
		function useMemo(create, deps) {
		  var dispatcher = resolveDispatcher();
		  return dispatcher.useMemo(create, deps);
		}
		function useImperativeHandle(ref, create, deps) {
		  var dispatcher = resolveDispatcher();
		  return dispatcher.useImperativeHandle(ref, create, deps);
		}
		function useDebugValue(value, formatterFn) {
		  {
		    var dispatcher = resolveDispatcher();
		    return dispatcher.useDebugValue(value, formatterFn);
		  }
		}
		function useTransition() {
		  var dispatcher = resolveDispatcher();
		  return dispatcher.useTransition();
		}
		function useDeferredValue(value) {
		  var dispatcher = resolveDispatcher();
		  return dispatcher.useDeferredValue(value);
		}
		function useId() {
		  var dispatcher = resolveDispatcher();
		  return dispatcher.useId();
		}
		function useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
		  var dispatcher = resolveDispatcher();
		  return dispatcher.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
		}

		// Helpers to patch console.logs to avoid logging during side-effect free
		// replaying on render function. This currently only patches the object
		// lazily which won't cover if the log function was extracted eagerly.
		// We could also eagerly patch the method.
		var disabledDepth = 0;
		var prevLog;
		var prevInfo;
		var prevWarn;
		var prevError;
		var prevGroup;
		var prevGroupCollapsed;
		var prevGroupEnd;

		function disabledLog() {}

		disabledLog.__reactDisabledLog = true;
		function disableLogs() {
		  {
		    if (disabledDepth === 0) {
		      /* eslint-disable react-internal/no-production-logging */
		      prevLog = console.log;
		      prevInfo = console.info;
		      prevWarn = console.warn;
		      prevError = console.error;
		      prevGroup = console.group;
		      prevGroupCollapsed = console.groupCollapsed;
		      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

		      var props = {
		        configurable: true,
		        enumerable: true,
		        value: disabledLog,
		        writable: true
		      }; // $FlowFixMe Flow thinks console is immutable.

		      Object.defineProperties(console, {
		        info: props,
		        log: props,
		        warn: props,
		        error: props,
		        group: props,
		        groupCollapsed: props,
		        groupEnd: props
		      });
		      /* eslint-enable react-internal/no-production-logging */
		    }

		    disabledDepth++;
		  }
		}
		function reenableLogs() {
		  {
		    disabledDepth--;

		    if (disabledDepth === 0) {
		      /* eslint-disable react-internal/no-production-logging */
		      var props = {
		        configurable: true,
		        enumerable: true,
		        writable: true
		      }; // $FlowFixMe Flow thinks console is immutable.

		      Object.defineProperties(console, {
		        log: assign({}, props, {
		          value: prevLog
		        }),
		        info: assign({}, props, {
		          value: prevInfo
		        }),
		        warn: assign({}, props, {
		          value: prevWarn
		        }),
		        error: assign({}, props, {
		          value: prevError
		        }),
		        group: assign({}, props, {
		          value: prevGroup
		        }),
		        groupCollapsed: assign({}, props, {
		          value: prevGroupCollapsed
		        }),
		        groupEnd: assign({}, props, {
		          value: prevGroupEnd
		        })
		      });
		      /* eslint-enable react-internal/no-production-logging */
		    }

		    if (disabledDepth < 0) {
		      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
		    }
		  }
		}

		var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
		var prefix;
		function describeBuiltInComponentFrame(name, source, ownerFn) {
		  {
		    if (prefix === undefined) {
		      // Extract the VM specific prefix used by each line.
		      try {
		        throw Error();
		      } catch (x) {
		        var match = x.stack.trim().match(/\n( *(at )?)/);
		        prefix = match && match[1] || '';
		      }
		    } // We use the prefix to ensure our stacks line up with native stack frames.


		    return '\n' + prefix + name;
		  }
		}
		var reentry = false;
		var componentFrameCache;

		{
		  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
		  componentFrameCache = new PossiblyWeakMap();
		}

		function describeNativeComponentFrame(fn, construct) {
		  // If something asked for a stack inside a fake render, it should get ignored.
		  if ( !fn || reentry) {
		    return '';
		  }

		  {
		    var frame = componentFrameCache.get(fn);

		    if (frame !== undefined) {
		      return frame;
		    }
		  }

		  var control;
		  reentry = true;
		  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

		  Error.prepareStackTrace = undefined;
		  var previousDispatcher;

		  {
		    previousDispatcher = ReactCurrentDispatcher$1.current; // Set the dispatcher in DEV because this might be call in the render function
		    // for warnings.

		    ReactCurrentDispatcher$1.current = null;
		    disableLogs();
		  }

		  try {
		    // This should throw.
		    if (construct) {
		      // Something should be setting the props in the constructor.
		      var Fake = function () {
		        throw Error();
		      }; // $FlowFixMe


		      Object.defineProperty(Fake.prototype, 'props', {
		        set: function () {
		          // We use a throwing setter instead of frozen or non-writable props
		          // because that won't throw in a non-strict mode function.
		          throw Error();
		        }
		      });

		      if (typeof Reflect === 'object' && Reflect.construct) {
		        // We construct a different control for this case to include any extra
		        // frames added by the construct call.
		        try {
		          Reflect.construct(Fake, []);
		        } catch (x) {
		          control = x;
		        }

		        Reflect.construct(fn, [], Fake);
		      } else {
		        try {
		          Fake.call();
		        } catch (x) {
		          control = x;
		        }

		        fn.call(Fake.prototype);
		      }
		    } else {
		      try {
		        throw Error();
		      } catch (x) {
		        control = x;
		      }

		      fn();
		    }
		  } catch (sample) {
		    // This is inlined manually because closure doesn't do it for us.
		    if (sample && control && typeof sample.stack === 'string') {
		      // This extracts the first frame from the sample that isn't also in the control.
		      // Skipping one frame that we assume is the frame that calls the two.
		      var sampleLines = sample.stack.split('\n');
		      var controlLines = control.stack.split('\n');
		      var s = sampleLines.length - 1;
		      var c = controlLines.length - 1;

		      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
		        // We expect at least one stack frame to be shared.
		        // Typically this will be the root most one. However, stack frames may be
		        // cut off due to maximum stack limits. In this case, one maybe cut off
		        // earlier than the other. We assume that the sample is longer or the same
		        // and there for cut off earlier. So we should find the root most frame in
		        // the sample somewhere in the control.
		        c--;
		      }

		      for (; s >= 1 && c >= 0; s--, c--) {
		        // Next we find the first one that isn't the same which should be the
		        // frame that called our sample function and the control.
		        if (sampleLines[s] !== controlLines[c]) {
		          // In V8, the first line is describing the message but other VMs don't.
		          // If we're about to return the first line, and the control is also on the same
		          // line, that's a pretty good indicator that our sample threw at same line as
		          // the control. I.e. before we entered the sample frame. So we ignore this result.
		          // This can happen if you passed a class to function component, or non-function.
		          if (s !== 1 || c !== 1) {
		            do {
		              s--;
		              c--; // We may still have similar intermediate frames from the construct call.
		              // The next one that isn't the same should be our match though.

		              if (c < 0 || sampleLines[s] !== controlLines[c]) {
		                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
		                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at '); // If our component frame is labeled "<anonymous>"
		                // but we have a user-provided "displayName"
		                // splice it in to make the stack more readable.


		                if (fn.displayName && _frame.includes('<anonymous>')) {
		                  _frame = _frame.replace('<anonymous>', fn.displayName);
		                }

		                {
		                  if (typeof fn === 'function') {
		                    componentFrameCache.set(fn, _frame);
		                  }
		                } // Return the line we found.


		                return _frame;
		              }
		            } while (s >= 1 && c >= 0);
		          }

		          break;
		        }
		      }
		    }
		  } finally {
		    reentry = false;

		    {
		      ReactCurrentDispatcher$1.current = previousDispatcher;
		      reenableLogs();
		    }

		    Error.prepareStackTrace = previousPrepareStackTrace;
		  } // Fallback to just using the name if we couldn't make it throw.


		  var name = fn ? fn.displayName || fn.name : '';
		  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

		  {
		    if (typeof fn === 'function') {
		      componentFrameCache.set(fn, syntheticFrame);
		    }
		  }

		  return syntheticFrame;
		}
		function describeFunctionComponentFrame(fn, source, ownerFn) {
		  {
		    return describeNativeComponentFrame(fn, false);
		  }
		}

		function shouldConstruct(Component) {
		  var prototype = Component.prototype;
		  return !!(prototype && prototype.isReactComponent);
		}

		function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

		  if (type == null) {
		    return '';
		  }

		  if (typeof type === 'function') {
		    {
		      return describeNativeComponentFrame(type, shouldConstruct(type));
		    }
		  }

		  if (typeof type === 'string') {
		    return describeBuiltInComponentFrame(type);
		  }

		  switch (type) {
		    case REACT_SUSPENSE_TYPE:
		      return describeBuiltInComponentFrame('Suspense');

		    case REACT_SUSPENSE_LIST_TYPE:
		      return describeBuiltInComponentFrame('SuspenseList');
		  }

		  if (typeof type === 'object') {
		    switch (type.$$typeof) {
		      case REACT_FORWARD_REF_TYPE:
		        return describeFunctionComponentFrame(type.render);

		      case REACT_MEMO_TYPE:
		        // Memo may contain any component type so we recursively resolve it.
		        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

		      case REACT_LAZY_TYPE:
		        {
		          var lazyComponent = type;
		          var payload = lazyComponent._payload;
		          var init = lazyComponent._init;

		          try {
		            // Lazy may contain any component type so we recursively resolve it.
		            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
		          } catch (x) {}
		        }
		    }
		  }

		  return '';
		}

		var loggedTypeFailures = {};
		var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

		function setCurrentlyValidatingElement(element) {
		  {
		    if (element) {
		      var owner = element._owner;
		      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
		      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
		    } else {
		      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
		    }
		  }
		}

		function checkPropTypes(typeSpecs, values, location, componentName, element) {
		  {
		    // $FlowFixMe This is okay but Flow doesn't know it.
		    var has = Function.call.bind(hasOwnProperty);

		    for (var typeSpecName in typeSpecs) {
		      if (has(typeSpecs, typeSpecName)) {
		        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
		        // fail the render phase where it didn't fail before. So we log it.
		        // After these have been cleaned up, we'll let them throw.

		        try {
		          // This is intentionally an invariant that gets caught. It's the same
		          // behavior as without this statement except with a better message.
		          if (typeof typeSpecs[typeSpecName] !== 'function') {
		            // eslint-disable-next-line react-internal/prod-error-codes
		            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
		            err.name = 'Invariant Violation';
		            throw err;
		          }

		          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
		        } catch (ex) {
		          error$1 = ex;
		        }

		        if (error$1 && !(error$1 instanceof Error)) {
		          setCurrentlyValidatingElement(element);

		          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

		          setCurrentlyValidatingElement(null);
		        }

		        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
		          // Only monitor this failure once because there tends to be a lot of the
		          // same error.
		          loggedTypeFailures[error$1.message] = true;
		          setCurrentlyValidatingElement(element);

		          error('Failed %s type: %s', location, error$1.message);

		          setCurrentlyValidatingElement(null);
		        }
		      }
		    }
		  }
		}

		function setCurrentlyValidatingElement$1(element) {
		  {
		    if (element) {
		      var owner = element._owner;
		      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
		      setExtraStackFrame(stack);
		    } else {
		      setExtraStackFrame(null);
		    }
		  }
		}

		var propTypesMisspellWarningShown;

		{
		  propTypesMisspellWarningShown = false;
		}

		function getDeclarationErrorAddendum() {
		  if (ReactCurrentOwner.current) {
		    var name = getComponentNameFromType(ReactCurrentOwner.current.type);

		    if (name) {
		      return '\n\nCheck the render method of `' + name + '`.';
		    }
		  }

		  return '';
		}

		function getSourceInfoErrorAddendum(source) {
		  if (source !== undefined) {
		    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
		    var lineNumber = source.lineNumber;
		    return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
		  }

		  return '';
		}

		function getSourceInfoErrorAddendumForProps(elementProps) {
		  if (elementProps !== null && elementProps !== undefined) {
		    return getSourceInfoErrorAddendum(elementProps.__source);
		  }

		  return '';
		}
		/**
		 * Warn if there's no key explicitly set on dynamic arrays of children or
		 * object keys are not valid. This allows us to keep track of children between
		 * updates.
		 */


		var ownerHasKeyUseWarning = {};

		function getCurrentComponentErrorInfo(parentType) {
		  var info = getDeclarationErrorAddendum();

		  if (!info) {
		    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

		    if (parentName) {
		      info = "\n\nCheck the top-level render call using <" + parentName + ">.";
		    }
		  }

		  return info;
		}
		/**
		 * Warn if the element doesn't have an explicit key assigned to it.
		 * This element is in an array. The array could grow and shrink or be
		 * reordered. All children that haven't already been validated are required to
		 * have a "key" property assigned to it. Error statuses are cached so a warning
		 * will only be shown once.
		 *
		 * @internal
		 * @param {ReactElement} element Element that requires a key.
		 * @param {*} parentType element's parent's type.
		 */


		function validateExplicitKey(element, parentType) {
		  if (!element._store || element._store.validated || element.key != null) {
		    return;
		  }

		  element._store.validated = true;
		  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

		  if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
		    return;
		  }

		  ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
		  // property, it may be the creator of the child that's responsible for
		  // assigning it a key.

		  var childOwner = '';

		  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
		    // Give the component that originally created this child.
		    childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
		  }

		  {
		    setCurrentlyValidatingElement$1(element);

		    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

		    setCurrentlyValidatingElement$1(null);
		  }
		}
		/**
		 * Ensure that every element either is passed in a static location, in an
		 * array with an explicit keys property defined, or in an object literal
		 * with valid key property.
		 *
		 * @internal
		 * @param {ReactNode} node Statically passed child of any type.
		 * @param {*} parentType node's parent's type.
		 */


		function validateChildKeys(node, parentType) {
		  if (typeof node !== 'object') {
		    return;
		  }

		  if (isArray(node)) {
		    for (var i = 0; i < node.length; i++) {
		      var child = node[i];

		      if (isValidElement(child)) {
		        validateExplicitKey(child, parentType);
		      }
		    }
		  } else if (isValidElement(node)) {
		    // This element was passed in a valid location.
		    if (node._store) {
		      node._store.validated = true;
		    }
		  } else if (node) {
		    var iteratorFn = getIteratorFn(node);

		    if (typeof iteratorFn === 'function') {
		      // Entry iterators used to provide implicit keys,
		      // but now we print a separate warning for them later.
		      if (iteratorFn !== node.entries) {
		        var iterator = iteratorFn.call(node);
		        var step;

		        while (!(step = iterator.next()).done) {
		          if (isValidElement(step.value)) {
		            validateExplicitKey(step.value, parentType);
		          }
		        }
		      }
		    }
		  }
		}
		/**
		 * Given an element, validate that its props follow the propTypes definition,
		 * provided by the type.
		 *
		 * @param {ReactElement} element
		 */


		function validatePropTypes(element) {
		  {
		    var type = element.type;

		    if (type === null || type === undefined || typeof type === 'string') {
		      return;
		    }

		    var propTypes;

		    if (typeof type === 'function') {
		      propTypes = type.propTypes;
		    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
		    // Inner props are checked in the reconciler.
		    type.$$typeof === REACT_MEMO_TYPE)) {
		      propTypes = type.propTypes;
		    } else {
		      return;
		    }

		    if (propTypes) {
		      // Intentionally inside to avoid triggering lazy initializers:
		      var name = getComponentNameFromType(type);
		      checkPropTypes(propTypes, element.props, 'prop', name, element);
		    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
		      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

		      var _name = getComponentNameFromType(type);

		      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
		    }

		    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
		      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
		    }
		  }
		}
		/**
		 * Given a fragment, validate that it can only be provided with fragment props
		 * @param {ReactElement} fragment
		 */


		function validateFragmentProps(fragment) {
		  {
		    var keys = Object.keys(fragment.props);

		    for (var i = 0; i < keys.length; i++) {
		      var key = keys[i];

		      if (key !== 'children' && key !== 'key') {
		        setCurrentlyValidatingElement$1(fragment);

		        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

		        setCurrentlyValidatingElement$1(null);
		        break;
		      }
		    }

		    if (fragment.ref !== null) {
		      setCurrentlyValidatingElement$1(fragment);

		      error('Invalid attribute `ref` supplied to `React.Fragment`.');

		      setCurrentlyValidatingElement$1(null);
		    }
		  }
		}
		function createElementWithValidation(type, props, children) {
		  var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
		  // succeed and there will likely be errors in render.

		  if (!validType) {
		    var info = '';

		    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
		      info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
		    }

		    var sourceInfo = getSourceInfoErrorAddendumForProps(props);

		    if (sourceInfo) {
		      info += sourceInfo;
		    } else {
		      info += getDeclarationErrorAddendum();
		    }

		    var typeString;

		    if (type === null) {
		      typeString = 'null';
		    } else if (isArray(type)) {
		      typeString = 'array';
		    } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
		      typeString = "<" + (getComponentNameFromType(type.type) || 'Unknown') + " />";
		      info = ' Did you accidentally export a JSX literal instead of a component?';
		    } else {
		      typeString = typeof type;
		    }

		    {
		      error('React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
		    }
		  }

		  var element = createElement.apply(this, arguments); // The result can be nullish if a mock or a custom function is used.
		  // TODO: Drop this when these are no longer allowed as the type argument.

		  if (element == null) {
		    return element;
		  } // Skip key warning if the type isn't valid since our key validation logic
		  // doesn't expect a non-string/function type and can throw confusing errors.
		  // We don't want exception behavior to differ between dev and prod.
		  // (Rendering will throw with a helpful message and as soon as the type is
		  // fixed, the key warnings will appear.)


		  if (validType) {
		    for (var i = 2; i < arguments.length; i++) {
		      validateChildKeys(arguments[i], type);
		    }
		  }

		  if (type === REACT_FRAGMENT_TYPE) {
		    validateFragmentProps(element);
		  } else {
		    validatePropTypes(element);
		  }

		  return element;
		}
		var didWarnAboutDeprecatedCreateFactory = false;
		function createFactoryWithValidation(type) {
		  var validatedFactory = createElementWithValidation.bind(null, type);
		  validatedFactory.type = type;

		  {
		    if (!didWarnAboutDeprecatedCreateFactory) {
		      didWarnAboutDeprecatedCreateFactory = true;

		      warn('React.createFactory() is deprecated and will be removed in ' + 'a future major release. Consider using JSX ' + 'or use React.createElement() directly instead.');
		    } // Legacy hook: remove it


		    Object.defineProperty(validatedFactory, 'type', {
		      enumerable: false,
		      get: function () {
		        warn('Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');

		        Object.defineProperty(this, 'type', {
		          value: type
		        });
		        return type;
		      }
		    });
		  }

		  return validatedFactory;
		}
		function cloneElementWithValidation(element, props, children) {
		  var newElement = cloneElement.apply(this, arguments);

		  for (var i = 2; i < arguments.length; i++) {
		    validateChildKeys(arguments[i], newElement.type);
		  }

		  validatePropTypes(newElement);
		  return newElement;
		}

		function startTransition(scope, options) {
		  var prevTransition = ReactCurrentBatchConfig.transition;
		  ReactCurrentBatchConfig.transition = {};
		  var currentTransition = ReactCurrentBatchConfig.transition;

		  {
		    ReactCurrentBatchConfig.transition._updatedFibers = new Set();
		  }

		  try {
		    scope();
		  } finally {
		    ReactCurrentBatchConfig.transition = prevTransition;

		    {
		      if (prevTransition === null && currentTransition._updatedFibers) {
		        var updatedFibersCount = currentTransition._updatedFibers.size;

		        if (updatedFibersCount > 10) {
		          warn('Detected a large number of updates inside startTransition. ' + 'If this is due to a subscription please re-write it to use React provided hooks. ' + 'Otherwise concurrent mode guarantees are off the table.');
		        }

		        currentTransition._updatedFibers.clear();
		      }
		    }
		  }
		}

		var didWarnAboutMessageChannel = false;
		var enqueueTaskImpl = null;
		function enqueueTask(task) {
		  if (enqueueTaskImpl === null) {
		    try {
		      // read require off the module object to get around the bundlers.
		      // we don't want them to detect a require and bundle a Node polyfill.
		      var requireString = ('require' + Math.random()).slice(0, 7);
		      var nodeRequire = module && module[requireString]; // assuming we're in node, let's try to get node's
		      // version of setImmediate, bypassing fake timers if any.

		      enqueueTaskImpl = nodeRequire.call(module, 'timers').setImmediate;
		    } catch (_err) {
		      // we're in a browser
		      // we can't use regular timers because they may still be faked
		      // so we try MessageChannel+postMessage instead
		      enqueueTaskImpl = function (callback) {
		        {
		          if (didWarnAboutMessageChannel === false) {
		            didWarnAboutMessageChannel = true;

		            if (typeof MessageChannel === 'undefined') {
		              error('This browser does not have a MessageChannel implementation, ' + 'so enqueuing tasks via await act(async () => ...) will fail. ' + 'Please file an issue at https://github.com/facebook/react/issues ' + 'if you encounter this warning.');
		            }
		          }
		        }

		        var channel = new MessageChannel();
		        channel.port1.onmessage = callback;
		        channel.port2.postMessage(undefined);
		      };
		    }
		  }

		  return enqueueTaskImpl(task);
		}

		var actScopeDepth = 0;
		var didWarnNoAwaitAct = false;
		function act(callback) {
		  {
		    // `act` calls can be nested, so we track the depth. This represents the
		    // number of `act` scopes on the stack.
		    var prevActScopeDepth = actScopeDepth;
		    actScopeDepth++;

		    if (ReactCurrentActQueue.current === null) {
		      // This is the outermost `act` scope. Initialize the queue. The reconciler
		      // will detect the queue and use it instead of Scheduler.
		      ReactCurrentActQueue.current = [];
		    }

		    var prevIsBatchingLegacy = ReactCurrentActQueue.isBatchingLegacy;
		    var result;

		    try {
		      // Used to reproduce behavior of `batchedUpdates` in legacy mode. Only
		      // set to `true` while the given callback is executed, not for updates
		      // triggered during an async event, because this is how the legacy
		      // implementation of `act` behaved.
		      ReactCurrentActQueue.isBatchingLegacy = true;
		      result = callback(); // Replicate behavior of original `act` implementation in legacy mode,
		      // which flushed updates immediately after the scope function exits, even
		      // if it's an async function.

		      if (!prevIsBatchingLegacy && ReactCurrentActQueue.didScheduleLegacyUpdate) {
		        var queue = ReactCurrentActQueue.current;

		        if (queue !== null) {
		          ReactCurrentActQueue.didScheduleLegacyUpdate = false;
		          flushActQueue(queue);
		        }
		      }
		    } catch (error) {
		      popActScope(prevActScopeDepth);
		      throw error;
		    } finally {
		      ReactCurrentActQueue.isBatchingLegacy = prevIsBatchingLegacy;
		    }

		    if (result !== null && typeof result === 'object' && typeof result.then === 'function') {
		      var thenableResult = result; // The callback is an async function (i.e. returned a promise). Wait
		      // for it to resolve before exiting the current scope.

		      var wasAwaited = false;
		      var thenable = {
		        then: function (resolve, reject) {
		          wasAwaited = true;
		          thenableResult.then(function (returnValue) {
		            popActScope(prevActScopeDepth);

		            if (actScopeDepth === 0) {
		              // We've exited the outermost act scope. Recursively flush the
		              // queue until there's no remaining work.
		              recursivelyFlushAsyncActWork(returnValue, resolve, reject);
		            } else {
		              resolve(returnValue);
		            }
		          }, function (error) {
		            // The callback threw an error.
		            popActScope(prevActScopeDepth);
		            reject(error);
		          });
		        }
		      };

		      {
		        if (!didWarnNoAwaitAct && typeof Promise !== 'undefined') {
		          // eslint-disable-next-line no-undef
		          Promise.resolve().then(function () {}).then(function () {
		            if (!wasAwaited) {
		              didWarnNoAwaitAct = true;

		              error('You called act(async () => ...) without await. ' + 'This could lead to unexpected testing behaviour, ' + 'interleaving multiple act calls and mixing their ' + 'scopes. ' + 'You should - await act(async () => ...);');
		            }
		          });
		        }
		      }

		      return thenable;
		    } else {
		      var returnValue = result; // The callback is not an async function. Exit the current scope
		      // immediately, without awaiting.

		      popActScope(prevActScopeDepth);

		      if (actScopeDepth === 0) {
		        // Exiting the outermost act scope. Flush the queue.
		        var _queue = ReactCurrentActQueue.current;

		        if (_queue !== null) {
		          flushActQueue(_queue);
		          ReactCurrentActQueue.current = null;
		        } // Return a thenable. If the user awaits it, we'll flush again in
		        // case additional work was scheduled by a microtask.


		        var _thenable = {
		          then: function (resolve, reject) {
		            // Confirm we haven't re-entered another `act` scope, in case
		            // the user does something weird like await the thenable
		            // multiple times.
		            if (ReactCurrentActQueue.current === null) {
		              // Recursively flush the queue until there's no remaining work.
		              ReactCurrentActQueue.current = [];
		              recursivelyFlushAsyncActWork(returnValue, resolve, reject);
		            } else {
		              resolve(returnValue);
		            }
		          }
		        };
		        return _thenable;
		      } else {
		        // Since we're inside a nested `act` scope, the returned thenable
		        // immediately resolves. The outer scope will flush the queue.
		        var _thenable2 = {
		          then: function (resolve, reject) {
		            resolve(returnValue);
		          }
		        };
		        return _thenable2;
		      }
		    }
		  }
		}

		function popActScope(prevActScopeDepth) {
		  {
		    if (prevActScopeDepth !== actScopeDepth - 1) {
		      error('You seem to have overlapping act() calls, this is not supported. ' + 'Be sure to await previous act() calls before making a new one. ');
		    }

		    actScopeDepth = prevActScopeDepth;
		  }
		}

		function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
		  {
		    var queue = ReactCurrentActQueue.current;

		    if (queue !== null) {
		      try {
		        flushActQueue(queue);
		        enqueueTask(function () {
		          if (queue.length === 0) {
		            // No additional work was scheduled. Finish.
		            ReactCurrentActQueue.current = null;
		            resolve(returnValue);
		          } else {
		            // Keep flushing work until there's none left.
		            recursivelyFlushAsyncActWork(returnValue, resolve, reject);
		          }
		        });
		      } catch (error) {
		        reject(error);
		      }
		    } else {
		      resolve(returnValue);
		    }
		  }
		}

		var isFlushing = false;

		function flushActQueue(queue) {
		  {
		    if (!isFlushing) {
		      // Prevent re-entrance.
		      isFlushing = true;
		      var i = 0;

		      try {
		        for (; i < queue.length; i++) {
		          var callback = queue[i];

		          do {
		            callback = callback(true);
		          } while (callback !== null);
		        }

		        queue.length = 0;
		      } catch (error) {
		        // If something throws, leave the remaining callbacks on the queue.
		        queue = queue.slice(i + 1);
		        throw error;
		      } finally {
		        isFlushing = false;
		      }
		    }
		  }
		}

		var createElement$1 =  createElementWithValidation ;
		var cloneElement$1 =  cloneElementWithValidation ;
		var createFactory =  createFactoryWithValidation ;
		var Children = {
		  map: mapChildren,
		  forEach: forEachChildren,
		  count: countChildren,
		  toArray: toArray,
		  only: onlyChild
		};

		exports.Children = Children;
		exports.Component = Component;
		exports.Fragment = REACT_FRAGMENT_TYPE;
		exports.Profiler = REACT_PROFILER_TYPE;
		exports.PureComponent = PureComponent;
		exports.StrictMode = REACT_STRICT_MODE_TYPE;
		exports.Suspense = REACT_SUSPENSE_TYPE;
		exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
		exports.cloneElement = cloneElement$1;
		exports.createContext = createContext;
		exports.createElement = createElement$1;
		exports.createFactory = createFactory;
		exports.createRef = createRef;
		exports.forwardRef = forwardRef;
		exports.isValidElement = isValidElement;
		exports.lazy = lazy;
		exports.memo = memo;
		exports.startTransition = startTransition;
		exports.unstable_act = act;
		exports.useCallback = useCallback;
		exports.useContext = useContext;
		exports.useDebugValue = useDebugValue;
		exports.useDeferredValue = useDeferredValue;
		exports.useEffect = useEffect;
		exports.useId = useId;
		exports.useImperativeHandle = useImperativeHandle;
		exports.useInsertionEffect = useInsertionEffect;
		exports.useLayoutEffect = useLayoutEffect;
		exports.useMemo = useMemo;
		exports.useReducer = useReducer;
		exports.useRef = useRef;
		exports.useState = useState;
		exports.useSyncExternalStore = useSyncExternalStore;
		exports.useTransition = useTransition;
		exports.version = ReactVersion;
		          /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
		if (
		  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
		  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop ===
		    'function'
		) {
		  __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
		}
		        
		  })();
		} 
	} (react_development, react_development.exports));
	return react_development.exports;
}

var hasRequiredReact;

function requireReact () {
	if (hasRequiredReact) return react.exports;
	hasRequiredReact = 1;

	if (process.env.NODE_ENV === 'production') {
	  react.exports = requireReact_production_min();
	} else {
	  react.exports = requireReact_development();
	}
	return react.exports;
}

/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactJsxRuntime_production_min;

function requireReactJsxRuntime_production_min () {
	if (hasRequiredReactJsxRuntime_production_min) return reactJsxRuntime_production_min;
	hasRequiredReactJsxRuntime_production_min = 1;
var f=requireReact(),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
	function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return {$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}reactJsxRuntime_production_min.Fragment=l;reactJsxRuntime_production_min.jsx=q;reactJsxRuntime_production_min.jsxs=q;
	return reactJsxRuntime_production_min;
}

var reactJsxRuntime_development = {};

/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactJsxRuntime_development;

function requireReactJsxRuntime_development () {
	if (hasRequiredReactJsxRuntime_development) return reactJsxRuntime_development;
	hasRequiredReactJsxRuntime_development = 1;

	if (process.env.NODE_ENV !== "production") {
	  (function() {

	var React = requireReact();

	// ATTENTION
	// When adding new symbols to this file,
	// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
	// The Symbol used to tag the ReactElement-like types.
	var REACT_ELEMENT_TYPE = Symbol.for('react.element');
	var REACT_PORTAL_TYPE = Symbol.for('react.portal');
	var REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');
	var REACT_STRICT_MODE_TYPE = Symbol.for('react.strict_mode');
	var REACT_PROFILER_TYPE = Symbol.for('react.profiler');
	var REACT_PROVIDER_TYPE = Symbol.for('react.provider');
	var REACT_CONTEXT_TYPE = Symbol.for('react.context');
	var REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');
	var REACT_SUSPENSE_TYPE = Symbol.for('react.suspense');
	var REACT_SUSPENSE_LIST_TYPE = Symbol.for('react.suspense_list');
	var REACT_MEMO_TYPE = Symbol.for('react.memo');
	var REACT_LAZY_TYPE = Symbol.for('react.lazy');
	var REACT_OFFSCREEN_TYPE = Symbol.for('react.offscreen');
	var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
	var FAUX_ITERATOR_SYMBOL = '@@iterator';
	function getIteratorFn(maybeIterable) {
	  if (maybeIterable === null || typeof maybeIterable !== 'object') {
	    return null;
	  }

	  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

	  if (typeof maybeIterator === 'function') {
	    return maybeIterator;
	  }

	  return null;
	}

	var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

	function error(format) {
	  {
	    {
	      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	        args[_key2 - 1] = arguments[_key2];
	      }

	      printWarning('error', format, args);
	    }
	  }
	}

	function printWarning(level, format, args) {
	  // When changing this logic, you might want to also
	  // update consoleWithStackDev.www.js as well.
	  {
	    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
	    var stack = ReactDebugCurrentFrame.getStackAddendum();

	    if (stack !== '') {
	      format += '%s';
	      args = args.concat([stack]);
	    } // eslint-disable-next-line react-internal/safe-string-coercion


	    var argsWithFormat = args.map(function (item) {
	      return String(item);
	    }); // Careful: RN currently depends on this prefix

	    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
	    // breaks IE9: https://github.com/facebook/react/issues/13610
	    // eslint-disable-next-line react-internal/no-production-logging

	    Function.prototype.apply.call(console[level], console, argsWithFormat);
	  }
	}

	// -----------------------------------------------------------------------------

	var enableScopeAPI = false; // Experimental Create Event Handle API.
	var enableCacheElement = false;
	var enableTransitionTracing = false; // No known bugs, but needs performance testing

	var enableLegacyHidden = false; // Enables unstable_avoidThisFallback feature in Fiber
	// stuff. Intended to enable React core members to more easily debug scheduling
	// issues in DEV builds.

	var enableDebugTracing = false; // Track which Fiber(s) schedule render work.

	var REACT_MODULE_REFERENCE;

	{
	  REACT_MODULE_REFERENCE = Symbol.for('react.module.reference');
	}

	function isValidElementType(type) {
	  if (typeof type === 'string' || typeof type === 'function') {
	    return true;
	  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


	  if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing  || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden  || type === REACT_OFFSCREEN_TYPE || enableScopeAPI  || enableCacheElement  || enableTransitionTracing ) {
	    return true;
	  }

	  if (typeof type === 'object' && type !== null) {
	    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
	    // types supported by any Flight configuration anywhere since
	    // we don't know which Flight build this will end up being used
	    // with.
	    type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== undefined) {
	      return true;
	    }
	  }

	  return false;
	}

	function getWrappedName(outerType, innerType, wrapperName) {
	  var displayName = outerType.displayName;

	  if (displayName) {
	    return displayName;
	  }

	  var functionName = innerType.displayName || innerType.name || '';
	  return functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName;
	} // Keep in sync with react-reconciler/getComponentNameFromFiber


	function getContextName(type) {
	  return type.displayName || 'Context';
	} // Note that the reconciler package should generally prefer to use getComponentNameFromFiber() instead.


	function getComponentNameFromType(type) {
	  if (type == null) {
	    // Host root, text node or just invalid type.
	    return null;
	  }

	  {
	    if (typeof type.tag === 'number') {
	      error('Received an unexpected object in getComponentNameFromType(). ' + 'This is likely a bug in React. Please file an issue.');
	    }
	  }

	  if (typeof type === 'function') {
	    return type.displayName || type.name || null;
	  }

	  if (typeof type === 'string') {
	    return type;
	  }

	  switch (type) {
	    case REACT_FRAGMENT_TYPE:
	      return 'Fragment';

	    case REACT_PORTAL_TYPE:
	      return 'Portal';

	    case REACT_PROFILER_TYPE:
	      return 'Profiler';

	    case REACT_STRICT_MODE_TYPE:
	      return 'StrictMode';

	    case REACT_SUSPENSE_TYPE:
	      return 'Suspense';

	    case REACT_SUSPENSE_LIST_TYPE:
	      return 'SuspenseList';

	  }

	  if (typeof type === 'object') {
	    switch (type.$$typeof) {
	      case REACT_CONTEXT_TYPE:
	        var context = type;
	        return getContextName(context) + '.Consumer';

	      case REACT_PROVIDER_TYPE:
	        var provider = type;
	        return getContextName(provider._context) + '.Provider';

	      case REACT_FORWARD_REF_TYPE:
	        return getWrappedName(type, type.render, 'ForwardRef');

	      case REACT_MEMO_TYPE:
	        var outerName = type.displayName || null;

	        if (outerName !== null) {
	          return outerName;
	        }

	        return getComponentNameFromType(type.type) || 'Memo';

	      case REACT_LAZY_TYPE:
	        {
	          var lazyComponent = type;
	          var payload = lazyComponent._payload;
	          var init = lazyComponent._init;

	          try {
	            return getComponentNameFromType(init(payload));
	          } catch (x) {
	            return null;
	          }
	        }

	      // eslint-disable-next-line no-fallthrough
	    }
	  }

	  return null;
	}

	var assign = Object.assign;

	// Helpers to patch console.logs to avoid logging during side-effect free
	// replaying on render function. This currently only patches the object
	// lazily which won't cover if the log function was extracted eagerly.
	// We could also eagerly patch the method.
	var disabledDepth = 0;
	var prevLog;
	var prevInfo;
	var prevWarn;
	var prevError;
	var prevGroup;
	var prevGroupCollapsed;
	var prevGroupEnd;

	function disabledLog() {}

	disabledLog.__reactDisabledLog = true;
	function disableLogs() {
	  {
	    if (disabledDepth === 0) {
	      /* eslint-disable react-internal/no-production-logging */
	      prevLog = console.log;
	      prevInfo = console.info;
	      prevWarn = console.warn;
	      prevError = console.error;
	      prevGroup = console.group;
	      prevGroupCollapsed = console.groupCollapsed;
	      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

	      var props = {
	        configurable: true,
	        enumerable: true,
	        value: disabledLog,
	        writable: true
	      }; // $FlowFixMe Flow thinks console is immutable.

	      Object.defineProperties(console, {
	        info: props,
	        log: props,
	        warn: props,
	        error: props,
	        group: props,
	        groupCollapsed: props,
	        groupEnd: props
	      });
	      /* eslint-enable react-internal/no-production-logging */
	    }

	    disabledDepth++;
	  }
	}
	function reenableLogs() {
	  {
	    disabledDepth--;

	    if (disabledDepth === 0) {
	      /* eslint-disable react-internal/no-production-logging */
	      var props = {
	        configurable: true,
	        enumerable: true,
	        writable: true
	      }; // $FlowFixMe Flow thinks console is immutable.

	      Object.defineProperties(console, {
	        log: assign({}, props, {
	          value: prevLog
	        }),
	        info: assign({}, props, {
	          value: prevInfo
	        }),
	        warn: assign({}, props, {
	          value: prevWarn
	        }),
	        error: assign({}, props, {
	          value: prevError
	        }),
	        group: assign({}, props, {
	          value: prevGroup
	        }),
	        groupCollapsed: assign({}, props, {
	          value: prevGroupCollapsed
	        }),
	        groupEnd: assign({}, props, {
	          value: prevGroupEnd
	        })
	      });
	      /* eslint-enable react-internal/no-production-logging */
	    }

	    if (disabledDepth < 0) {
	      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
	    }
	  }
	}

	var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
	var prefix;
	function describeBuiltInComponentFrame(name, source, ownerFn) {
	  {
	    if (prefix === undefined) {
	      // Extract the VM specific prefix used by each line.
	      try {
	        throw Error();
	      } catch (x) {
	        var match = x.stack.trim().match(/\n( *(at )?)/);
	        prefix = match && match[1] || '';
	      }
	    } // We use the prefix to ensure our stacks line up with native stack frames.


	    return '\n' + prefix + name;
	  }
	}
	var reentry = false;
	var componentFrameCache;

	{
	  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
	  componentFrameCache = new PossiblyWeakMap();
	}

	function describeNativeComponentFrame(fn, construct) {
	  // If something asked for a stack inside a fake render, it should get ignored.
	  if ( !fn || reentry) {
	    return '';
	  }

	  {
	    var frame = componentFrameCache.get(fn);

	    if (frame !== undefined) {
	      return frame;
	    }
	  }

	  var control;
	  reentry = true;
	  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

	  Error.prepareStackTrace = undefined;
	  var previousDispatcher;

	  {
	    previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
	    // for warnings.

	    ReactCurrentDispatcher.current = null;
	    disableLogs();
	  }

	  try {
	    // This should throw.
	    if (construct) {
	      // Something should be setting the props in the constructor.
	      var Fake = function () {
	        throw Error();
	      }; // $FlowFixMe


	      Object.defineProperty(Fake.prototype, 'props', {
	        set: function () {
	          // We use a throwing setter instead of frozen or non-writable props
	          // because that won't throw in a non-strict mode function.
	          throw Error();
	        }
	      });

	      if (typeof Reflect === 'object' && Reflect.construct) {
	        // We construct a different control for this case to include any extra
	        // frames added by the construct call.
	        try {
	          Reflect.construct(Fake, []);
	        } catch (x) {
	          control = x;
	        }

	        Reflect.construct(fn, [], Fake);
	      } else {
	        try {
	          Fake.call();
	        } catch (x) {
	          control = x;
	        }

	        fn.call(Fake.prototype);
	      }
	    } else {
	      try {
	        throw Error();
	      } catch (x) {
	        control = x;
	      }

	      fn();
	    }
	  } catch (sample) {
	    // This is inlined manually because closure doesn't do it for us.
	    if (sample && control && typeof sample.stack === 'string') {
	      // This extracts the first frame from the sample that isn't also in the control.
	      // Skipping one frame that we assume is the frame that calls the two.
	      var sampleLines = sample.stack.split('\n');
	      var controlLines = control.stack.split('\n');
	      var s = sampleLines.length - 1;
	      var c = controlLines.length - 1;

	      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
	        // We expect at least one stack frame to be shared.
	        // Typically this will be the root most one. However, stack frames may be
	        // cut off due to maximum stack limits. In this case, one maybe cut off
	        // earlier than the other. We assume that the sample is longer or the same
	        // and there for cut off earlier. So we should find the root most frame in
	        // the sample somewhere in the control.
	        c--;
	      }

	      for (; s >= 1 && c >= 0; s--, c--) {
	        // Next we find the first one that isn't the same which should be the
	        // frame that called our sample function and the control.
	        if (sampleLines[s] !== controlLines[c]) {
	          // In V8, the first line is describing the message but other VMs don't.
	          // If we're about to return the first line, and the control is also on the same
	          // line, that's a pretty good indicator that our sample threw at same line as
	          // the control. I.e. before we entered the sample frame. So we ignore this result.
	          // This can happen if you passed a class to function component, or non-function.
	          if (s !== 1 || c !== 1) {
	            do {
	              s--;
	              c--; // We may still have similar intermediate frames from the construct call.
	              // The next one that isn't the same should be our match though.

	              if (c < 0 || sampleLines[s] !== controlLines[c]) {
	                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
	                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at '); // If our component frame is labeled "<anonymous>"
	                // but we have a user-provided "displayName"
	                // splice it in to make the stack more readable.


	                if (fn.displayName && _frame.includes('<anonymous>')) {
	                  _frame = _frame.replace('<anonymous>', fn.displayName);
	                }

	                {
	                  if (typeof fn === 'function') {
	                    componentFrameCache.set(fn, _frame);
	                  }
	                } // Return the line we found.


	                return _frame;
	              }
	            } while (s >= 1 && c >= 0);
	          }

	          break;
	        }
	      }
	    }
	  } finally {
	    reentry = false;

	    {
	      ReactCurrentDispatcher.current = previousDispatcher;
	      reenableLogs();
	    }

	    Error.prepareStackTrace = previousPrepareStackTrace;
	  } // Fallback to just using the name if we couldn't make it throw.


	  var name = fn ? fn.displayName || fn.name : '';
	  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

	  {
	    if (typeof fn === 'function') {
	      componentFrameCache.set(fn, syntheticFrame);
	    }
	  }

	  return syntheticFrame;
	}
	function describeFunctionComponentFrame(fn, source, ownerFn) {
	  {
	    return describeNativeComponentFrame(fn, false);
	  }
	}

	function shouldConstruct(Component) {
	  var prototype = Component.prototype;
	  return !!(prototype && prototype.isReactComponent);
	}

	function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

	  if (type == null) {
	    return '';
	  }

	  if (typeof type === 'function') {
	    {
	      return describeNativeComponentFrame(type, shouldConstruct(type));
	    }
	  }

	  if (typeof type === 'string') {
	    return describeBuiltInComponentFrame(type);
	  }

	  switch (type) {
	    case REACT_SUSPENSE_TYPE:
	      return describeBuiltInComponentFrame('Suspense');

	    case REACT_SUSPENSE_LIST_TYPE:
	      return describeBuiltInComponentFrame('SuspenseList');
	  }

	  if (typeof type === 'object') {
	    switch (type.$$typeof) {
	      case REACT_FORWARD_REF_TYPE:
	        return describeFunctionComponentFrame(type.render);

	      case REACT_MEMO_TYPE:
	        // Memo may contain any component type so we recursively resolve it.
	        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

	      case REACT_LAZY_TYPE:
	        {
	          var lazyComponent = type;
	          var payload = lazyComponent._payload;
	          var init = lazyComponent._init;

	          try {
	            // Lazy may contain any component type so we recursively resolve it.
	            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
	          } catch (x) {}
	        }
	    }
	  }

	  return '';
	}

	var hasOwnProperty = Object.prototype.hasOwnProperty;

	var loggedTypeFailures = {};
	var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;

	function setCurrentlyValidatingElement(element) {
	  {
	    if (element) {
	      var owner = element._owner;
	      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
	      ReactDebugCurrentFrame.setExtraStackFrame(stack);
	    } else {
	      ReactDebugCurrentFrame.setExtraStackFrame(null);
	    }
	  }
	}

	function checkPropTypes(typeSpecs, values, location, componentName, element) {
	  {
	    // $FlowFixMe This is okay but Flow doesn't know it.
	    var has = Function.call.bind(hasOwnProperty);

	    for (var typeSpecName in typeSpecs) {
	      if (has(typeSpecs, typeSpecName)) {
	        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.

	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          if (typeof typeSpecs[typeSpecName] !== 'function') {
	            // eslint-disable-next-line react-internal/prod-error-codes
	            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
	            err.name = 'Invariant Violation';
	            throw err;
	          }

	          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
	        } catch (ex) {
	          error$1 = ex;
	        }

	        if (error$1 && !(error$1 instanceof Error)) {
	          setCurrentlyValidatingElement(element);

	          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

	          setCurrentlyValidatingElement(null);
	        }

	        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error$1.message] = true;
	          setCurrentlyValidatingElement(element);

	          error('Failed %s type: %s', location, error$1.message);

	          setCurrentlyValidatingElement(null);
	        }
	      }
	    }
	  }
	}

	var isArrayImpl = Array.isArray; // eslint-disable-next-line no-redeclare

	function isArray(a) {
	  return isArrayImpl(a);
	}

	/*
	 * The `'' + value` pattern (used in in perf-sensitive code) throws for Symbol
	 * and Temporal.* types. See https://github.com/facebook/react/pull/22064.
	 *
	 * The functions in this module will throw an easier-to-understand,
	 * easier-to-debug exception with a clear errors message message explaining the
	 * problem. (Instead of a confusing exception thrown inside the implementation
	 * of the `value` object).
	 */
	// $FlowFixMe only called in DEV, so void return is not possible.
	function typeName(value) {
	  {
	    // toStringTag is needed for namespaced types like Temporal.Instant
	    var hasToStringTag = typeof Symbol === 'function' && Symbol.toStringTag;
	    var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || 'Object';
	    return type;
	  }
	} // $FlowFixMe only called in DEV, so void return is not possible.


	function willCoercionThrow(value) {
	  {
	    try {
	      testStringCoercion(value);
	      return false;
	    } catch (e) {
	      return true;
	    }
	  }
	}

	function testStringCoercion(value) {
	  // If you ended up here by following an exception call stack, here's what's
	  // happened: you supplied an object or symbol value to React (as a prop, key,
	  // DOM attribute, CSS property, string ref, etc.) and when React tried to
	  // coerce it to a string using `'' + value`, an exception was thrown.
	  //
	  // The most common types that will cause this exception are `Symbol` instances
	  // and Temporal objects like `Temporal.Instant`. But any object that has a
	  // `valueOf` or `[Symbol.toPrimitive]` method that throws will also cause this
	  // exception. (Library authors do this to prevent users from using built-in
	  // numeric operators like `+` or comparison operators like `>=` because custom
	  // methods are needed to perform accurate arithmetic or comparison.)
	  //
	  // To fix the problem, coerce this object or symbol value to a string before
	  // passing it to React. The most reliable way is usually `String(value)`.
	  //
	  // To find which value is throwing, check the browser or debugger console.
	  // Before this exception was thrown, there should be `console.error` output
	  // that shows the type (Symbol, Temporal.PlainDate, etc.) that caused the
	  // problem and how that type was used: key, atrribute, input value prop, etc.
	  // In most cases, this console output also shows the component and its
	  // ancestor components where the exception happened.
	  //
	  // eslint-disable-next-line react-internal/safe-string-coercion
	  return '' + value;
	}
	function checkKeyStringCoercion(value) {
	  {
	    if (willCoercionThrow(value)) {
	      error('The provided key is an unsupported type %s.' + ' This value must be coerced to a string before before using it here.', typeName(value));

	      return testStringCoercion(value); // throw (to help callers find troubleshooting comments)
	    }
	  }
	}

	var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
	var RESERVED_PROPS = {
	  key: true,
	  ref: true,
	  __self: true,
	  __source: true
	};
	var specialPropKeyWarningShown;
	var specialPropRefWarningShown;
	var didWarnAboutStringRefs;

	{
	  didWarnAboutStringRefs = {};
	}

	function hasValidRef(config) {
	  {
	    if (hasOwnProperty.call(config, 'ref')) {
	      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

	      if (getter && getter.isReactWarning) {
	        return false;
	      }
	    }
	  }

	  return config.ref !== undefined;
	}

	function hasValidKey(config) {
	  {
	    if (hasOwnProperty.call(config, 'key')) {
	      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

	      if (getter && getter.isReactWarning) {
	        return false;
	      }
	    }
	  }

	  return config.key !== undefined;
	}

	function warnIfStringRefCannotBeAutoConverted(config, self) {
	  {
	    if (typeof config.ref === 'string' && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
	      var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);

	      if (!didWarnAboutStringRefs[componentName]) {
	        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', getComponentNameFromType(ReactCurrentOwner.current.type), config.ref);

	        didWarnAboutStringRefs[componentName] = true;
	      }
	    }
	  }
	}

	function defineKeyPropWarningGetter(props, displayName) {
	  {
	    var warnAboutAccessingKey = function () {
	      if (!specialPropKeyWarningShown) {
	        specialPropKeyWarningShown = true;

	        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
	      }
	    };

	    warnAboutAccessingKey.isReactWarning = true;
	    Object.defineProperty(props, 'key', {
	      get: warnAboutAccessingKey,
	      configurable: true
	    });
	  }
	}

	function defineRefPropWarningGetter(props, displayName) {
	  {
	    var warnAboutAccessingRef = function () {
	      if (!specialPropRefWarningShown) {
	        specialPropRefWarningShown = true;

	        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
	      }
	    };

	    warnAboutAccessingRef.isReactWarning = true;
	    Object.defineProperty(props, 'ref', {
	      get: warnAboutAccessingRef,
	      configurable: true
	    });
	  }
	}
	/**
	 * Factory method to create a new React element. This no longer adheres to
	 * the class pattern, so do not use new to call it. Also, instanceof check
	 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
	 * if something is a React Element.
	 *
	 * @param {*} type
	 * @param {*} props
	 * @param {*} key
	 * @param {string|object} ref
	 * @param {*} owner
	 * @param {*} self A *temporary* helper to detect places where `this` is
	 * different from the `owner` when React.createElement is called, so that we
	 * can warn. We want to get rid of owner and replace string `ref`s with arrow
	 * functions, and as long as `this` and owner are the same, there will be no
	 * change in behavior.
	 * @param {*} source An annotation object (added by a transpiler or otherwise)
	 * indicating filename, line number, and/or other information.
	 * @internal
	 */


	var ReactElement = function (type, key, ref, self, source, owner, props) {
	  var element = {
	    // This tag allows us to uniquely identify this as a React Element
	    $$typeof: REACT_ELEMENT_TYPE,
	    // Built-in properties that belong on the element
	    type: type,
	    key: key,
	    ref: ref,
	    props: props,
	    // Record the component responsible for creating this element.
	    _owner: owner
	  };

	  {
	    // The validation flag is currently mutative. We put it on
	    // an external backing store so that we can freeze the whole object.
	    // This can be replaced with a WeakMap once they are implemented in
	    // commonly used development environments.
	    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
	    // the validation flag non-enumerable (where possible, which should
	    // include every environment we run tests in), so the test framework
	    // ignores it.

	    Object.defineProperty(element._store, 'validated', {
	      configurable: false,
	      enumerable: false,
	      writable: true,
	      value: false
	    }); // self and source are DEV only properties.

	    Object.defineProperty(element, '_self', {
	      configurable: false,
	      enumerable: false,
	      writable: false,
	      value: self
	    }); // Two elements created in two different places should be considered
	    // equal for testing purposes and therefore we hide it from enumeration.

	    Object.defineProperty(element, '_source', {
	      configurable: false,
	      enumerable: false,
	      writable: false,
	      value: source
	    });

	    if (Object.freeze) {
	      Object.freeze(element.props);
	      Object.freeze(element);
	    }
	  }

	  return element;
	};
	/**
	 * https://github.com/reactjs/rfcs/pull/107
	 * @param {*} type
	 * @param {object} props
	 * @param {string} key
	 */

	function jsxDEV(type, config, maybeKey, source, self) {
	  {
	    var propName; // Reserved names are extracted

	    var props = {};
	    var key = null;
	    var ref = null; // Currently, key can be spread in as a prop. This causes a potential
	    // issue if key is also explicitly declared (ie. <div {...props} key="Hi" />
	    // or <div key="Hi" {...props} /> ). We want to deprecate key spread,
	    // but as an intermediary step, we will use jsxDEV for everything except
	    // <div {...props} key="Hi" />, because we aren't currently able to tell if
	    // key is explicitly declared to be undefined or not.

	    if (maybeKey !== undefined) {
	      {
	        checkKeyStringCoercion(maybeKey);
	      }

	      key = '' + maybeKey;
	    }

	    if (hasValidKey(config)) {
	      {
	        checkKeyStringCoercion(config.key);
	      }

	      key = '' + config.key;
	    }

	    if (hasValidRef(config)) {
	      ref = config.ref;
	      warnIfStringRefCannotBeAutoConverted(config, self);
	    } // Remaining properties are added to a new props object


	    for (propName in config) {
	      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
	        props[propName] = config[propName];
	      }
	    } // Resolve default props


	    if (type && type.defaultProps) {
	      var defaultProps = type.defaultProps;

	      for (propName in defaultProps) {
	        if (props[propName] === undefined) {
	          props[propName] = defaultProps[propName];
	        }
	      }
	    }

	    if (key || ref) {
	      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

	      if (key) {
	        defineKeyPropWarningGetter(props, displayName);
	      }

	      if (ref) {
	        defineRefPropWarningGetter(props, displayName);
	      }
	    }

	    return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
	  }
	}

	var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
	var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

	function setCurrentlyValidatingElement$1(element) {
	  {
	    if (element) {
	      var owner = element._owner;
	      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
	      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
	    } else {
	      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
	    }
	  }
	}

	var propTypesMisspellWarningShown;

	{
	  propTypesMisspellWarningShown = false;
	}
	/**
	 * Verifies the object is a ReactElement.
	 * See https://reactjs.org/docs/react-api.html#isvalidelement
	 * @param {?object} object
	 * @return {boolean} True if `object` is a ReactElement.
	 * @final
	 */


	function isValidElement(object) {
	  {
	    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	  }
	}

	function getDeclarationErrorAddendum() {
	  {
	    if (ReactCurrentOwner$1.current) {
	      var name = getComponentNameFromType(ReactCurrentOwner$1.current.type);

	      if (name) {
	        return '\n\nCheck the render method of `' + name + '`.';
	      }
	    }

	    return '';
	  }
	}

	function getSourceInfoErrorAddendum(source) {
	  {
	    if (source !== undefined) {
	      var fileName = source.fileName.replace(/^.*[\\\/]/, '');
	      var lineNumber = source.lineNumber;
	      return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
	    }

	    return '';
	  }
	}
	/**
	 * Warn if there's no key explicitly set on dynamic arrays of children or
	 * object keys are not valid. This allows us to keep track of children between
	 * updates.
	 */


	var ownerHasKeyUseWarning = {};

	function getCurrentComponentErrorInfo(parentType) {
	  {
	    var info = getDeclarationErrorAddendum();

	    if (!info) {
	      var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

	      if (parentName) {
	        info = "\n\nCheck the top-level render call using <" + parentName + ">.";
	      }
	    }

	    return info;
	  }
	}
	/**
	 * Warn if the element doesn't have an explicit key assigned to it.
	 * This element is in an array. The array could grow and shrink or be
	 * reordered. All children that haven't already been validated are required to
	 * have a "key" property assigned to it. Error statuses are cached so a warning
	 * will only be shown once.
	 *
	 * @internal
	 * @param {ReactElement} element Element that requires a key.
	 * @param {*} parentType element's parent's type.
	 */


	function validateExplicitKey(element, parentType) {
	  {
	    if (!element._store || element._store.validated || element.key != null) {
	      return;
	    }

	    element._store.validated = true;
	    var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

	    if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
	      return;
	    }

	    ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
	    // property, it may be the creator of the child that's responsible for
	    // assigning it a key.

	    var childOwner = '';

	    if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
	      // Give the component that originally created this child.
	      childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
	    }

	    setCurrentlyValidatingElement$1(element);

	    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

	    setCurrentlyValidatingElement$1(null);
	  }
	}
	/**
	 * Ensure that every element either is passed in a static location, in an
	 * array with an explicit keys property defined, or in an object literal
	 * with valid key property.
	 *
	 * @internal
	 * @param {ReactNode} node Statically passed child of any type.
	 * @param {*} parentType node's parent's type.
	 */


	function validateChildKeys(node, parentType) {
	  {
	    if (typeof node !== 'object') {
	      return;
	    }

	    if (isArray(node)) {
	      for (var i = 0; i < node.length; i++) {
	        var child = node[i];

	        if (isValidElement(child)) {
	          validateExplicitKey(child, parentType);
	        }
	      }
	    } else if (isValidElement(node)) {
	      // This element was passed in a valid location.
	      if (node._store) {
	        node._store.validated = true;
	      }
	    } else if (node) {
	      var iteratorFn = getIteratorFn(node);

	      if (typeof iteratorFn === 'function') {
	        // Entry iterators used to provide implicit keys,
	        // but now we print a separate warning for them later.
	        if (iteratorFn !== node.entries) {
	          var iterator = iteratorFn.call(node);
	          var step;

	          while (!(step = iterator.next()).done) {
	            if (isValidElement(step.value)) {
	              validateExplicitKey(step.value, parentType);
	            }
	          }
	        }
	      }
	    }
	  }
	}
	/**
	 * Given an element, validate that its props follow the propTypes definition,
	 * provided by the type.
	 *
	 * @param {ReactElement} element
	 */


	function validatePropTypes(element) {
	  {
	    var type = element.type;

	    if (type === null || type === undefined || typeof type === 'string') {
	      return;
	    }

	    var propTypes;

	    if (typeof type === 'function') {
	      propTypes = type.propTypes;
	    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
	    // Inner props are checked in the reconciler.
	    type.$$typeof === REACT_MEMO_TYPE)) {
	      propTypes = type.propTypes;
	    } else {
	      return;
	    }

	    if (propTypes) {
	      // Intentionally inside to avoid triggering lazy initializers:
	      var name = getComponentNameFromType(type);
	      checkPropTypes(propTypes, element.props, 'prop', name, element);
	    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
	      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

	      var _name = getComponentNameFromType(type);

	      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
	    }

	    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
	      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
	    }
	  }
	}
	/**
	 * Given a fragment, validate that it can only be provided with fragment props
	 * @param {ReactElement} fragment
	 */


	function validateFragmentProps(fragment) {
	  {
	    var keys = Object.keys(fragment.props);

	    for (var i = 0; i < keys.length; i++) {
	      var key = keys[i];

	      if (key !== 'children' && key !== 'key') {
	        setCurrentlyValidatingElement$1(fragment);

	        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

	        setCurrentlyValidatingElement$1(null);
	        break;
	      }
	    }

	    if (fragment.ref !== null) {
	      setCurrentlyValidatingElement$1(fragment);

	      error('Invalid attribute `ref` supplied to `React.Fragment`.');

	      setCurrentlyValidatingElement$1(null);
	    }
	  }
	}

	function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
	  {
	    var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
	    // succeed and there will likely be errors in render.

	    if (!validType) {
	      var info = '';

	      if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
	        info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
	      }

	      var sourceInfo = getSourceInfoErrorAddendum(source);

	      if (sourceInfo) {
	        info += sourceInfo;
	      } else {
	        info += getDeclarationErrorAddendum();
	      }

	      var typeString;

	      if (type === null) {
	        typeString = 'null';
	      } else if (isArray(type)) {
	        typeString = 'array';
	      } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
	        typeString = "<" + (getComponentNameFromType(type.type) || 'Unknown') + " />";
	        info = ' Did you accidentally export a JSX literal instead of a component?';
	      } else {
	        typeString = typeof type;
	      }

	      error('React.jsx: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
	    }

	    var element = jsxDEV(type, props, key, source, self); // The result can be nullish if a mock or a custom function is used.
	    // TODO: Drop this when these are no longer allowed as the type argument.

	    if (element == null) {
	      return element;
	    } // Skip key warning if the type isn't valid since our key validation logic
	    // doesn't expect a non-string/function type and can throw confusing errors.
	    // We don't want exception behavior to differ between dev and prod.
	    // (Rendering will throw with a helpful message and as soon as the type is
	    // fixed, the key warnings will appear.)


	    if (validType) {
	      var children = props.children;

	      if (children !== undefined) {
	        if (isStaticChildren) {
	          if (isArray(children)) {
	            for (var i = 0; i < children.length; i++) {
	              validateChildKeys(children[i], type);
	            }

	            if (Object.freeze) {
	              Object.freeze(children);
	            }
	          } else {
	            error('React.jsx: Static children should always be an array. ' + 'You are likely explicitly calling React.jsxs or React.jsxDEV. ' + 'Use the Babel transform instead.');
	          }
	        } else {
	          validateChildKeys(children, type);
	        }
	      }
	    }

	    if (type === REACT_FRAGMENT_TYPE) {
	      validateFragmentProps(element);
	    } else {
	      validatePropTypes(element);
	    }

	    return element;
	  }
	} // These two functions exist to still get child warnings in dev
	// even with the prod transform. This means that jsxDEV is purely
	// opt-in behavior for better messages but that we won't stop
	// giving you warnings if you use production apis.

	function jsxWithValidationStatic(type, props, key) {
	  {
	    return jsxWithValidation(type, props, key, true);
	  }
	}
	function jsxWithValidationDynamic(type, props, key) {
	  {
	    return jsxWithValidation(type, props, key, false);
	  }
	}

	var jsx =  jsxWithValidationDynamic ; // we may want to special case jsxs internally to take advantage of static children.
	// for now we can ship identical prod functions

	var jsxs =  jsxWithValidationStatic ;

	reactJsxRuntime_development.Fragment = REACT_FRAGMENT_TYPE;
	reactJsxRuntime_development.jsx = jsx;
	reactJsxRuntime_development.jsxs = jsxs;
	  })();
	}
	return reactJsxRuntime_development;
}

if (process.env.NODE_ENV === 'production') {
  jsxRuntime.exports = requireReactJsxRuntime_production_min();
} else {
  jsxRuntime.exports = requireReactJsxRuntime_development();
}

var jsxRuntimeExports = jsxRuntime.exports;

var propTypes = {exports: {}};

var reactIs = {exports: {}};

var reactIs_production_min = {};

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactIs_production_min;

function requireReactIs_production_min () {
	if (hasRequiredReactIs_production_min) return reactIs_production_min;
	hasRequiredReactIs_production_min = 1;
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
	Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
	function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}reactIs_production_min.AsyncMode=l;reactIs_production_min.ConcurrentMode=m;reactIs_production_min.ContextConsumer=k;reactIs_production_min.ContextProvider=h;reactIs_production_min.Element=c;reactIs_production_min.ForwardRef=n;reactIs_production_min.Fragment=e;reactIs_production_min.Lazy=t;reactIs_production_min.Memo=r;reactIs_production_min.Portal=d;
	reactIs_production_min.Profiler=g;reactIs_production_min.StrictMode=f;reactIs_production_min.Suspense=p;reactIs_production_min.isAsyncMode=function(a){return A(a)||z(a)===l};reactIs_production_min.isConcurrentMode=A;reactIs_production_min.isContextConsumer=function(a){return z(a)===k};reactIs_production_min.isContextProvider=function(a){return z(a)===h};reactIs_production_min.isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};reactIs_production_min.isForwardRef=function(a){return z(a)===n};reactIs_production_min.isFragment=function(a){return z(a)===e};reactIs_production_min.isLazy=function(a){return z(a)===t};
	reactIs_production_min.isMemo=function(a){return z(a)===r};reactIs_production_min.isPortal=function(a){return z(a)===d};reactIs_production_min.isProfiler=function(a){return z(a)===g};reactIs_production_min.isStrictMode=function(a){return z(a)===f};reactIs_production_min.isSuspense=function(a){return z(a)===p};
	reactIs_production_min.isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};reactIs_production_min.typeOf=z;
	return reactIs_production_min;
}

var reactIs_development = {};

/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactIs_development;

function requireReactIs_development () {
	if (hasRequiredReactIs_development) return reactIs_development;
	hasRequiredReactIs_development = 1;



	if (process.env.NODE_ENV !== "production") {
	  (function() {

	// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
	// nor polyfill, then a plain number is used for performance.
	var hasSymbol = typeof Symbol === 'function' && Symbol.for;
	var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
	var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
	var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
	var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
	var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
	var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
	var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
	// (unstable) APIs that have been removed. Can we remove the symbols?

	var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
	var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
	var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
	var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
	var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
	var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
	var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
	var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
	var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
	var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
	var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

	function isValidElementType(type) {
	  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
	  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
	}

	function typeOf(object) {
	  if (typeof object === 'object' && object !== null) {
	    var $$typeof = object.$$typeof;

	    switch ($$typeof) {
	      case REACT_ELEMENT_TYPE:
	        var type = object.type;

	        switch (type) {
	          case REACT_ASYNC_MODE_TYPE:
	          case REACT_CONCURRENT_MODE_TYPE:
	          case REACT_FRAGMENT_TYPE:
	          case REACT_PROFILER_TYPE:
	          case REACT_STRICT_MODE_TYPE:
	          case REACT_SUSPENSE_TYPE:
	            return type;

	          default:
	            var $$typeofType = type && type.$$typeof;

	            switch ($$typeofType) {
	              case REACT_CONTEXT_TYPE:
	              case REACT_FORWARD_REF_TYPE:
	              case REACT_LAZY_TYPE:
	              case REACT_MEMO_TYPE:
	              case REACT_PROVIDER_TYPE:
	                return $$typeofType;

	              default:
	                return $$typeof;
	            }

	        }

	      case REACT_PORTAL_TYPE:
	        return $$typeof;
	    }
	  }

	  return undefined;
	} // AsyncMode is deprecated along with isAsyncMode

	var AsyncMode = REACT_ASYNC_MODE_TYPE;
	var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
	var ContextConsumer = REACT_CONTEXT_TYPE;
	var ContextProvider = REACT_PROVIDER_TYPE;
	var Element = REACT_ELEMENT_TYPE;
	var ForwardRef = REACT_FORWARD_REF_TYPE;
	var Fragment = REACT_FRAGMENT_TYPE;
	var Lazy = REACT_LAZY_TYPE;
	var Memo = REACT_MEMO_TYPE;
	var Portal = REACT_PORTAL_TYPE;
	var Profiler = REACT_PROFILER_TYPE;
	var StrictMode = REACT_STRICT_MODE_TYPE;
	var Suspense = REACT_SUSPENSE_TYPE;
	var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

	function isAsyncMode(object) {
	  {
	    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
	      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

	      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
	    }
	  }

	  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
	}
	function isConcurrentMode(object) {
	  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
	}
	function isContextConsumer(object) {
	  return typeOf(object) === REACT_CONTEXT_TYPE;
	}
	function isContextProvider(object) {
	  return typeOf(object) === REACT_PROVIDER_TYPE;
	}
	function isElement(object) {
	  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	}
	function isForwardRef(object) {
	  return typeOf(object) === REACT_FORWARD_REF_TYPE;
	}
	function isFragment(object) {
	  return typeOf(object) === REACT_FRAGMENT_TYPE;
	}
	function isLazy(object) {
	  return typeOf(object) === REACT_LAZY_TYPE;
	}
	function isMemo(object) {
	  return typeOf(object) === REACT_MEMO_TYPE;
	}
	function isPortal(object) {
	  return typeOf(object) === REACT_PORTAL_TYPE;
	}
	function isProfiler(object) {
	  return typeOf(object) === REACT_PROFILER_TYPE;
	}
	function isStrictMode(object) {
	  return typeOf(object) === REACT_STRICT_MODE_TYPE;
	}
	function isSuspense(object) {
	  return typeOf(object) === REACT_SUSPENSE_TYPE;
	}

	reactIs_development.AsyncMode = AsyncMode;
	reactIs_development.ConcurrentMode = ConcurrentMode;
	reactIs_development.ContextConsumer = ContextConsumer;
	reactIs_development.ContextProvider = ContextProvider;
	reactIs_development.Element = Element;
	reactIs_development.ForwardRef = ForwardRef;
	reactIs_development.Fragment = Fragment;
	reactIs_development.Lazy = Lazy;
	reactIs_development.Memo = Memo;
	reactIs_development.Portal = Portal;
	reactIs_development.Profiler = Profiler;
	reactIs_development.StrictMode = StrictMode;
	reactIs_development.Suspense = Suspense;
	reactIs_development.isAsyncMode = isAsyncMode;
	reactIs_development.isConcurrentMode = isConcurrentMode;
	reactIs_development.isContextConsumer = isContextConsumer;
	reactIs_development.isContextProvider = isContextProvider;
	reactIs_development.isElement = isElement;
	reactIs_development.isForwardRef = isForwardRef;
	reactIs_development.isFragment = isFragment;
	reactIs_development.isLazy = isLazy;
	reactIs_development.isMemo = isMemo;
	reactIs_development.isPortal = isPortal;
	reactIs_development.isProfiler = isProfiler;
	reactIs_development.isStrictMode = isStrictMode;
	reactIs_development.isSuspense = isSuspense;
	reactIs_development.isValidElementType = isValidElementType;
	reactIs_development.typeOf = typeOf;
	  })();
	}
	return reactIs_development;
}

var hasRequiredReactIs;

function requireReactIs () {
	if (hasRequiredReactIs) return reactIs.exports;
	hasRequiredReactIs = 1;

	if (process.env.NODE_ENV === 'production') {
	  reactIs.exports = requireReactIs_production_min();
	} else {
	  reactIs.exports = requireReactIs_development();
	}
	return reactIs.exports;
}

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

var objectAssign;
var hasRequiredObjectAssign;

function requireObjectAssign () {
	if (hasRequiredObjectAssign) return objectAssign;
	hasRequiredObjectAssign = 1;
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};
	return objectAssign;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret_1;
var hasRequiredReactPropTypesSecret;

function requireReactPropTypesSecret () {
	if (hasRequiredReactPropTypesSecret) return ReactPropTypesSecret_1;
	hasRequiredReactPropTypesSecret = 1;

	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

	ReactPropTypesSecret_1 = ReactPropTypesSecret;
	return ReactPropTypesSecret_1;
}

var has;
var hasRequiredHas;

function requireHas () {
	if (hasRequiredHas) return has;
	hasRequiredHas = 1;
	has = Function.call.bind(Object.prototype.hasOwnProperty);
	return has;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var checkPropTypes_1;
var hasRequiredCheckPropTypes;

function requireCheckPropTypes () {
	if (hasRequiredCheckPropTypes) return checkPropTypes_1;
	hasRequiredCheckPropTypes = 1;

	var printWarning = function() {};

	if (process.env.NODE_ENV !== 'production') {
	  var ReactPropTypesSecret = requireReactPropTypesSecret();
	  var loggedTypeFailures = {};
	  var has = requireHas();

	  printWarning = function(text) {
	    var message = 'Warning: ' + text;
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) { /**/ }
	  };
	}

	/**
	 * Assert that the values match with the type specs.
	 * Error messages are memorized and will only be shown once.
	 *
	 * @param {object} typeSpecs Map of name to a ReactPropType
	 * @param {object} values Runtime values that need to be type-checked
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @param {string} componentName Name of the component for error messages.
	 * @param {?Function} getStack Returns the component stack.
	 * @private
	 */
	function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
	  if (process.env.NODE_ENV !== 'production') {
	    for (var typeSpecName in typeSpecs) {
	      if (has(typeSpecs, typeSpecName)) {
	        var error;
	        // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.
	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          if (typeof typeSpecs[typeSpecName] !== 'function') {
	            var err = Error(
	              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
	              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' +
	              'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
	            );
	            err.name = 'Invariant Violation';
	            throw err;
	          }
	          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
	        } catch (ex) {
	          error = ex;
	        }
	        if (error && !(error instanceof Error)) {
	          printWarning(
	            (componentName || 'React class') + ': type specification of ' +
	            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
	            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
	            'You may have forgotten to pass an argument to the type checker ' +
	            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
	            'shape all require an argument).'
	          );
	        }
	        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error.message] = true;

	          var stack = getStack ? getStack() : '';

	          printWarning(
	            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
	          );
	        }
	      }
	    }
	  }
	}

	/**
	 * Resets warning cache when testing.
	 *
	 * @private
	 */
	checkPropTypes.resetWarningCache = function() {
	  if (process.env.NODE_ENV !== 'production') {
	    loggedTypeFailures = {};
	  }
	};

	checkPropTypes_1 = checkPropTypes;
	return checkPropTypes_1;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var factoryWithTypeCheckers;
var hasRequiredFactoryWithTypeCheckers;

function requireFactoryWithTypeCheckers () {
	if (hasRequiredFactoryWithTypeCheckers) return factoryWithTypeCheckers;
	hasRequiredFactoryWithTypeCheckers = 1;

	var ReactIs = requireReactIs();
	var assign = requireObjectAssign();

	var ReactPropTypesSecret = requireReactPropTypesSecret();
	var has = requireHas();
	var checkPropTypes = requireCheckPropTypes();

	var printWarning = function() {};

	if (process.env.NODE_ENV !== 'production') {
	  printWarning = function(text) {
	    var message = 'Warning: ' + text;
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };
	}

	function emptyFunctionThatReturnsNull() {
	  return null;
	}

	factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
	  /* global Symbol */
	  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

	  /**
	   * Returns the iterator method function contained on the iterable object.
	   *
	   * Be sure to invoke the function with the iterable as context:
	   *
	   *     var iteratorFn = getIteratorFn(myIterable);
	   *     if (iteratorFn) {
	   *       var iterator = iteratorFn.call(myIterable);
	   *       ...
	   *     }
	   *
	   * @param {?object} maybeIterable
	   * @return {?function}
	   */
	  function getIteratorFn(maybeIterable) {
	    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	    if (typeof iteratorFn === 'function') {
	      return iteratorFn;
	    }
	  }

	  /**
	   * Collection of methods that allow declaration and validation of props that are
	   * supplied to React components. Example usage:
	   *
	   *   var Props = require('ReactPropTypes');
	   *   var MyArticle = React.createClass({
	   *     propTypes: {
	   *       // An optional string prop named "description".
	   *       description: Props.string,
	   *
	   *       // A required enum prop named "category".
	   *       category: Props.oneOf(['News','Photos']).isRequired,
	   *
	   *       // A prop named "dialog" that requires an instance of Dialog.
	   *       dialog: Props.instanceOf(Dialog).isRequired
	   *     },
	   *     render: function() { ... }
	   *   });
	   *
	   * A more formal specification of how these methods are used:
	   *
	   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
	   *   decl := ReactPropTypes.{type}(.isRequired)?
	   *
	   * Each and every declaration produces a function with the same signature. This
	   * allows the creation of custom validation functions. For example:
	   *
	   *  var MyLink = React.createClass({
	   *    propTypes: {
	   *      // An optional string or URI prop named "href".
	   *      href: function(props, propName, componentName) {
	   *        var propValue = props[propName];
	   *        if (propValue != null && typeof propValue !== 'string' &&
	   *            !(propValue instanceof URI)) {
	   *          return new Error(
	   *            'Expected a string or an URI for ' + propName + ' in ' +
	   *            componentName
	   *          );
	   *        }
	   *      }
	   *    },
	   *    render: function() {...}
	   *  });
	   *
	   * @internal
	   */

	  var ANONYMOUS = '<<anonymous>>';

	  // Important!
	  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
	  var ReactPropTypes = {
	    array: createPrimitiveTypeChecker('array'),
	    bigint: createPrimitiveTypeChecker('bigint'),
	    bool: createPrimitiveTypeChecker('boolean'),
	    func: createPrimitiveTypeChecker('function'),
	    number: createPrimitiveTypeChecker('number'),
	    object: createPrimitiveTypeChecker('object'),
	    string: createPrimitiveTypeChecker('string'),
	    symbol: createPrimitiveTypeChecker('symbol'),

	    any: createAnyTypeChecker(),
	    arrayOf: createArrayOfTypeChecker,
	    element: createElementTypeChecker(),
	    elementType: createElementTypeTypeChecker(),
	    instanceOf: createInstanceTypeChecker,
	    node: createNodeChecker(),
	    objectOf: createObjectOfTypeChecker,
	    oneOf: createEnumTypeChecker,
	    oneOfType: createUnionTypeChecker,
	    shape: createShapeTypeChecker,
	    exact: createStrictShapeTypeChecker,
	  };

	  /**
	   * inlined Object.is polyfill to avoid requiring consumers ship their own
	   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	   */
	  /*eslint-disable no-self-compare*/
	  function is(x, y) {
	    // SameValue algorithm
	    if (x === y) {
	      // Steps 1-5, 7-10
	      // Steps 6.b-6.e: +0 != -0
	      return x !== 0 || 1 / x === 1 / y;
	    } else {
	      // Step 6.a: NaN == NaN
	      return x !== x && y !== y;
	    }
	  }
	  /*eslint-enable no-self-compare*/

	  /**
	   * We use an Error-like object for backward compatibility as people may call
	   * PropTypes directly and inspect their output. However, we don't use real
	   * Errors anymore. We don't inspect their stack anyway, and creating them
	   * is prohibitively expensive if they are created too often, such as what
	   * happens in oneOfType() for any type before the one that matched.
	   */
	  function PropTypeError(message, data) {
	    this.message = message;
	    this.data = data && typeof data === 'object' ? data: {};
	    this.stack = '';
	  }
	  // Make `instanceof Error` still work for returned errors.
	  PropTypeError.prototype = Error.prototype;

	  function createChainableTypeChecker(validate) {
	    if (process.env.NODE_ENV !== 'production') {
	      var manualPropTypeCallCache = {};
	      var manualPropTypeWarningCount = 0;
	    }
	    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
	      componentName = componentName || ANONYMOUS;
	      propFullName = propFullName || propName;

	      if (secret !== ReactPropTypesSecret) {
	        if (throwOnDirectAccess) {
	          // New behavior only for users of `prop-types` package
	          var err = new Error(
	            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	            'Use `PropTypes.checkPropTypes()` to call them. ' +
	            'Read more at http://fb.me/use-check-prop-types'
	          );
	          err.name = 'Invariant Violation';
	          throw err;
	        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
	          // Old behavior for people using React.PropTypes
	          var cacheKey = componentName + ':' + propName;
	          if (
	            !manualPropTypeCallCache[cacheKey] &&
	            // Avoid spamming the console because they are often not actionable except for lib authors
	            manualPropTypeWarningCount < 3
	          ) {
	            printWarning(
	              'You are manually calling a React.PropTypes validation ' +
	              'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' +
	              'and will throw in the standalone `prop-types` package. ' +
	              'You may be seeing this warning due to a third-party PropTypes ' +
	              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
	            );
	            manualPropTypeCallCache[cacheKey] = true;
	            manualPropTypeWarningCount++;
	          }
	        }
	      }
	      if (props[propName] == null) {
	        if (isRequired) {
	          if (props[propName] === null) {
	            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
	          }
	          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
	        }
	        return null;
	      } else {
	        return validate(props, propName, componentName, location, propFullName);
	      }
	    }

	    var chainedCheckType = checkType.bind(null, false);
	    chainedCheckType.isRequired = checkType.bind(null, true);

	    return chainedCheckType;
	  }

	  function createPrimitiveTypeChecker(expectedType) {
	    function validate(props, propName, componentName, location, propFullName, secret) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== expectedType) {
	        // `propValue` being instance of, say, date/regexp, pass the 'object'
	        // check, but we can offer a more precise error message here rather than
	        // 'of type `object`'.
	        var preciseType = getPreciseType(propValue);

	        return new PropTypeError(
	          'Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'),
	          {expectedType: expectedType}
	        );
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createAnyTypeChecker() {
	    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
	  }

	  function createArrayOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
	      }
	      var propValue = props[propName];
	      if (!Array.isArray(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
	      }
	      for (var i = 0; i < propValue.length; i++) {
	        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
	        if (error instanceof Error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createElementTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!isValidElement(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createElementTypeTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!ReactIs.isValidElementType(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createInstanceTypeChecker(expectedClass) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!(props[propName] instanceof expectedClass)) {
	        var expectedClassName = expectedClass.name || ANONYMOUS;
	        var actualClassName = getClassName(props[propName]);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createEnumTypeChecker(expectedValues) {
	    if (!Array.isArray(expectedValues)) {
	      if (process.env.NODE_ENV !== 'production') {
	        if (arguments.length > 1) {
	          printWarning(
	            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
	            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
	          );
	        } else {
	          printWarning('Invalid argument supplied to oneOf, expected an array.');
	        }
	      }
	      return emptyFunctionThatReturnsNull;
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      for (var i = 0; i < expectedValues.length; i++) {
	        if (is(propValue, expectedValues[i])) {
	          return null;
	        }
	      }

	      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
	        var type = getPreciseType(value);
	        if (type === 'symbol') {
	          return String(value);
	        }
	        return value;
	      });
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createObjectOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
	      }
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
	      }
	      for (var key in propValue) {
	        if (has(propValue, key)) {
	          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	          if (error instanceof Error) {
	            return error;
	          }
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createUnionTypeChecker(arrayOfTypeCheckers) {
	    if (!Array.isArray(arrayOfTypeCheckers)) {
	      process.env.NODE_ENV !== 'production' ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
	      return emptyFunctionThatReturnsNull;
	    }

	    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	      var checker = arrayOfTypeCheckers[i];
	      if (typeof checker !== 'function') {
	        printWarning(
	          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
	          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
	        );
	        return emptyFunctionThatReturnsNull;
	      }
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      var expectedTypes = [];
	      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	        var checker = arrayOfTypeCheckers[i];
	        var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
	        if (checkerResult == null) {
	          return null;
	        }
	        if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
	          expectedTypes.push(checkerResult.data.expectedType);
	        }
	      }
	      var expectedTypesMessage = (expectedTypes.length > 0) ? ', expected one of type [' + expectedTypes.join(', ') + ']': '';
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createNodeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!isNode(props[propName])) {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function invalidValidatorError(componentName, location, propFullName, key, type) {
	    return new PropTypeError(
	      (componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' +
	      'it must be a function, usually from the `prop-types` package, but received `' + type + '`.'
	    );
	  }

	  function createShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      for (var key in shapeTypes) {
	        var checker = shapeTypes[key];
	        if (typeof checker !== 'function') {
	          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createStrictShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      // We need to check all keys in case some are required but missing from props.
	      var allKeys = assign({}, props[propName], shapeTypes);
	      for (var key in allKeys) {
	        var checker = shapeTypes[key];
	        if (has(shapeTypes, key) && typeof checker !== 'function') {
	          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
	        }
	        if (!checker) {
	          return new PropTypeError(
	            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
	            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
	            '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  ')
	          );
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }

	    return createChainableTypeChecker(validate);
	  }

	  function isNode(propValue) {
	    switch (typeof propValue) {
	      case 'number':
	      case 'string':
	      case 'undefined':
	        return true;
	      case 'boolean':
	        return !propValue;
	      case 'object':
	        if (Array.isArray(propValue)) {
	          return propValue.every(isNode);
	        }
	        if (propValue === null || isValidElement(propValue)) {
	          return true;
	        }

	        var iteratorFn = getIteratorFn(propValue);
	        if (iteratorFn) {
	          var iterator = iteratorFn.call(propValue);
	          var step;
	          if (iteratorFn !== propValue.entries) {
	            while (!(step = iterator.next()).done) {
	              if (!isNode(step.value)) {
	                return false;
	              }
	            }
	          } else {
	            // Iterator will provide entry [k,v] tuples rather than values.
	            while (!(step = iterator.next()).done) {
	              var entry = step.value;
	              if (entry) {
	                if (!isNode(entry[1])) {
	                  return false;
	                }
	              }
	            }
	          }
	        } else {
	          return false;
	        }

	        return true;
	      default:
	        return false;
	    }
	  }

	  function isSymbol(propType, propValue) {
	    // Native Symbol.
	    if (propType === 'symbol') {
	      return true;
	    }

	    // falsy value can't be a Symbol
	    if (!propValue) {
	      return false;
	    }

	    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
	    if (propValue['@@toStringTag'] === 'Symbol') {
	      return true;
	    }

	    // Fallback for non-spec compliant Symbols which are polyfilled.
	    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
	      return true;
	    }

	    return false;
	  }

	  // Equivalent of `typeof` but with special handling for array and regexp.
	  function getPropType(propValue) {
	    var propType = typeof propValue;
	    if (Array.isArray(propValue)) {
	      return 'array';
	    }
	    if (propValue instanceof RegExp) {
	      // Old webkits (at least until Android 4.0) return 'function' rather than
	      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
	      // passes PropTypes.object.
	      return 'object';
	    }
	    if (isSymbol(propType, propValue)) {
	      return 'symbol';
	    }
	    return propType;
	  }

	  // This handles more types than `getPropType`. Only used for error messages.
	  // See `createPrimitiveTypeChecker`.
	  function getPreciseType(propValue) {
	    if (typeof propValue === 'undefined' || propValue === null) {
	      return '' + propValue;
	    }
	    var propType = getPropType(propValue);
	    if (propType === 'object') {
	      if (propValue instanceof Date) {
	        return 'date';
	      } else if (propValue instanceof RegExp) {
	        return 'regexp';
	      }
	    }
	    return propType;
	  }

	  // Returns a string that is postfixed to a warning about an invalid type.
	  // For example, "undefined" or "of type array"
	  function getPostfixForTypeWarning(value) {
	    var type = getPreciseType(value);
	    switch (type) {
	      case 'array':
	      case 'object':
	        return 'an ' + type;
	      case 'boolean':
	      case 'date':
	      case 'regexp':
	        return 'a ' + type;
	      default:
	        return type;
	    }
	  }

	  // Returns class name of the object, if any.
	  function getClassName(propValue) {
	    if (!propValue.constructor || !propValue.constructor.name) {
	      return ANONYMOUS;
	    }
	    return propValue.constructor.name;
	  }

	  ReactPropTypes.checkPropTypes = checkPropTypes;
	  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};
	return factoryWithTypeCheckers;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var factoryWithThrowingShims;
var hasRequiredFactoryWithThrowingShims;

function requireFactoryWithThrowingShims () {
	if (hasRequiredFactoryWithThrowingShims) return factoryWithThrowingShims;
	hasRequiredFactoryWithThrowingShims = 1;

	var ReactPropTypesSecret = requireReactPropTypesSecret();

	function emptyFunction() {}
	function emptyFunctionWithReset() {}
	emptyFunctionWithReset.resetWarningCache = emptyFunction;

	factoryWithThrowingShims = function() {
	  function shim(props, propName, componentName, location, propFullName, secret) {
	    if (secret === ReactPropTypesSecret) {
	      // It is still safe when called from React.
	      return;
	    }
	    var err = new Error(
	      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	      'Use PropTypes.checkPropTypes() to call them. ' +
	      'Read more at http://fb.me/use-check-prop-types'
	    );
	    err.name = 'Invariant Violation';
	    throw err;
	  }	  shim.isRequired = shim;
	  function getShim() {
	    return shim;
	  }	  // Important!
	  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
	  var ReactPropTypes = {
	    array: shim,
	    bigint: shim,
	    bool: shim,
	    func: shim,
	    number: shim,
	    object: shim,
	    string: shim,
	    symbol: shim,

	    any: shim,
	    arrayOf: getShim,
	    element: shim,
	    elementType: shim,
	    instanceOf: getShim,
	    node: shim,
	    objectOf: getShim,
	    oneOf: getShim,
	    oneOfType: getShim,
	    shape: getShim,
	    exact: getShim,

	    checkPropTypes: emptyFunctionWithReset,
	    resetWarningCache: emptyFunction
	  };

	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};
	return factoryWithThrowingShims;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var ReactIs = requireReactIs();

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  propTypes.exports = requireFactoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  propTypes.exports = requireFactoryWithThrowingShims()();
}

var propTypesExports = propTypes.exports;
var PropTypes = /*@__PURE__*/getDefaultExportFromCjs(propTypesExports);

const DoorIcon = ({ height = 100, width = 100, color = '#000000' }) => {
    return jsxRuntimeExports.jsxs("svg", { width: width, height: height, viewBox: "0 0 19 18", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsxRuntimeExports.jsxs("g", { "clip-path": "url(#clip0_1766_1143)", children: [jsxRuntimeExports.jsx("path", { d: "M9.63824 8.26802C9.63824 7.93029 9.91194 7.65616 10.25 7.65616C10.588 7.65616 10.8617 7.93029 10.8617 8.26802V10.4818C10.8617 10.8195 10.588 11.0937 10.25 11.0937C9.91194 11.0937 9.63824 10.8195 9.63824 10.4818V8.26802Z", fill: color }), jsxRuntimeExports.jsx("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M7.10541 0.749878C6.74596 0.749878 6.40123 0.892592 6.14702 1.1467C5.89285 1.40078 5.75 1.74543 5.75 2.10482V14.009C5.75 14.3684 5.89287 14.713 6.14702 14.967C6.40118 15.2211 6.74589 15.3639 7.10541 15.3639L7.29985 15.3639V15.5655C7.29983 15.8882 7.34966 16.3161 7.63071 16.6827C7.93349 17.0776 8.58052 17.385 9.30135 17.1893C9.78683 17.0575 15.3891 15.499 15.6915 15.4084C16.0123 15.3122 16.3867 15.1713 16.669 14.8031C16.9497 14.437 16.9999 14.0145 16.9999 13.6859V2.10486C16.9999 1.74554 16.8571 1.40087 16.6029 1.14674C16.3487 0.892614 16.0039 0.749921 15.6445 0.749921L7.10541 0.749878ZM15.2863 2.02618C15.4939 1.97131 15.5865 2.00176 15.6196 2.01604C15.6618 2.03423 15.7041 2.06905 15.7611 2.14346C15.7867 2.17677 15.8095 2.22308 15.8264 2.28732C15.8452 2.35867 15.856 2.44987 15.856 2.56496V13.6859C15.856 13.9153 15.8166 14.0351 15.7611 14.1074C15.7075 14.1774 15.6307 14.2328 15.3631 14.313C15.0773 14.3986 9.48949 15.9533 9.00155 16.0858C8.87606 16.1198 8.76879 16.1067 8.68763 16.0783C8.60319 16.0489 8.5525 16.0052 8.53859 15.9871C8.48355 15.9153 8.44371 15.7911 8.44372 15.5656V4.4446C8.44372 4.21713 8.48336 4.09512 8.53859 4.02309C8.56152 3.99318 8.60311 3.95886 8.67193 3.92235C8.74004 3.88622 8.82941 3.85077 8.94178 3.81596C9.16839 3.74575 14.6729 2.18835 15.2863 2.02618Z", fill: color }), jsxRuntimeExports.jsx("path", { d: "M2.21877 5.28952L4.56985 7.97647C4.70684 8.13303 4.70684 8.36679 4.56985 8.52335L2.21877 11.2103L1.35791 10.4571L2.78872 8.82185H0.5V7.67797H2.78872L1.35791 6.04277L2.21877 5.28952Z", fill: color })] }), jsxRuntimeExports.jsx("defs", { children: jsxRuntimeExports.jsx("clipPath", { id: "clip0_1766_1143", children: jsxRuntimeExports.jsx("rect", { width: "18", height: "18", fill: "white", transform: "translate(0.5)" }) }) })] });
};
DoorIcon.propTypes = {
    /**
     * How height should the icon be?
     */
    height: PropTypes.number,
    /**
     * How width should the icon be?
     */
    width: PropTypes.number,
    /**
     * Alternate white and dark mode
     */
    color: PropTypes.string,
};

const ExclamationIcon = ({ height = 100, width = 100, color = '#000000', outline = false }) => {
    return outline ? (jsxRuntimeExports.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: width, height: height, viewBox: "0 0 24 24", fill: "none", children: [jsxRuntimeExports.jsx("path", { d: "M12 1.5C6.20156 1.5 1.5 6.20156 1.5 12C1.5 17.7984 6.20156 22.5 12 22.5C17.7984 22.5 22.5 17.7984 22.5 12C22.5 6.20156 17.7984 1.5 12 1.5ZM12 20.7188C7.18594 20.7188 3.28125 16.8141 3.28125 12C3.28125 7.18594 7.18594 3.28125 12 3.28125C16.8141 3.28125 20.7188 7.18594 20.7188 12C20.7188 16.8141 16.8141 20.7188 12 20.7188Z", fill: color }), jsxRuntimeExports.jsx("path", { d: "M10.875 16.125C10.875 16.4234 10.9935 16.7095 11.2045 16.9205C11.4155 17.1315 11.7016 17.25 12 17.25C12.2984 17.25 12.5845 17.1315 12.7955 16.9205C13.0065 16.7095 13.125 16.4234 13.125 16.125C13.125 15.8266 13.0065 15.5405 12.7955 15.3295C12.5845 15.1185 12.2984 15 12 15C11.7016 15 11.4155 15.1185 11.2045 15.3295C10.9935 15.5405 10.875 15.8266 10.875 16.125ZM11.1875 13.5H12.8125C12.9156 13.5 13 13.4156 13 13.3125V6.9375C13 6.83437 12.9156 6.75 12.8125 6.75H11.1875C11.0844 6.75 11 6.83437 11 6.9375V13.3125C11 13.4156 11.0844 13.5 11.1875 13.5Z", fill: color })] })) : (jsxRuntimeExports.jsx("svg", { width: width, height: height, viewBox: "0 0 17 17", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: jsxRuntimeExports.jsx("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M8.5 15.7598C12.366 15.7598 15.5 12.6258 15.5 8.75977C15.5 4.89377 12.366 1.75977 8.5 1.75977C4.63401 1.75977 1.5 4.89377 1.5 8.75977C1.5 12.6258 4.63401 15.7598 8.5 15.7598ZM9.40002 4.75977V9.75977H7.60002L7.60002 4.75977L9.40002 4.75977ZM9.5 11.7598C9.5 12.3121 9.05229 12.7598 8.5 12.7598C7.94772 12.7598 7.5 12.312 7.5 11.7598C7.5 11.2075 7.94772 10.7598 8.5 10.7598C9.05229 10.7598 9.5 11.2075 9.5 11.7598Z", fill: color }) }));
};
ExclamationIcon.propTypes = {
    /**
     * How height should the icon be?
     */
    height: PropTypes.number,
    /**
     * How width should the icon be?
     */
    width: PropTypes.number,
    /**
     * Alternate white and dark mode
     */
    color: PropTypes.string,
    /**
     * Alternate fill and no fill
     */
    outline: PropTypes.bool,
};

const EyeIcon = ({ height = 100, width = 100, color = '#000000', off = false }) => {
    return off ? (jsxRuntimeExports.jsxs("svg", { width: width, height: height, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsxRuntimeExports.jsx("path", { d: "M22.0829 11.3959C21.259 9.66015 20.2785 8.24452 19.1415 7.14905L17.949 8.34155C18.9214 9.27085 19.7684 10.4866 20.5009 12.0006C18.5509 16.0366 15.7829 17.9537 12.0001 17.9537C10.8646 17.9537 9.81875 17.7789 8.8625 17.4292L7.57039 18.7213C8.89852 19.3346 10.3751 19.6412 12.0001 19.6412C16.5048 19.6412 19.8657 17.2951 22.0829 12.603C22.172 12.4143 22.2183 12.2081 22.2183 11.9994C22.2183 11.7907 22.172 11.5846 22.0829 11.3959ZM20.593 3.88093L19.5938 2.88061C19.5764 2.86318 19.5557 2.84935 19.533 2.83992C19.5102 2.83048 19.4858 2.82562 19.4612 2.82562C19.4365 2.82562 19.4121 2.83048 19.3894 2.83992C19.3666 2.84935 19.3459 2.86318 19.3285 2.88061L16.7652 5.4428C15.3519 4.72093 13.7635 4.35999 12.0001 4.35999C7.49539 4.35999 4.13446 6.70608 1.91727 11.3983C1.82815 11.587 1.78193 11.7931 1.78193 12.0018C1.78193 12.2105 1.82815 12.4166 1.91727 12.6053C2.80305 14.4709 3.86946 15.9663 5.11649 17.0915L2.63633 19.5709C2.6012 19.6061 2.58146 19.6538 2.58146 19.7035C2.58146 19.7532 2.6012 19.8008 2.63633 19.836L3.63688 20.8366C3.67204 20.8717 3.71971 20.8914 3.76942 20.8914C3.81912 20.8914 3.8668 20.8717 3.90196 20.8366L20.593 4.14624C20.6104 4.12883 20.6242 4.10815 20.6337 4.08538C20.6431 4.06262 20.648 4.03822 20.648 4.01358C20.648 3.98894 20.6431 3.96454 20.6337 3.94178C20.6242 3.91902 20.6104 3.89834 20.593 3.88093ZM3.4993 12.0006C5.45164 7.96468 8.21961 6.04749 12.0001 6.04749C13.2784 6.04749 14.4406 6.26686 15.4951 6.71288L13.8474 8.36054C13.0671 7.9442 12.1737 7.78968 11.2988 7.91978C10.424 8.04988 9.6142 8.45771 8.98881 9.08309C8.36343 9.70848 7.9556 10.5183 7.8255 11.3931C7.6954 12.2679 7.84992 13.1614 8.26625 13.9417L6.3111 15.8969C5.22899 14.9418 4.29618 13.6478 3.4993 12.0006ZM9.28133 12.0006C9.28174 11.5873 9.37964 11.18 9.56706 10.8116C9.75448 10.4433 10.0262 10.1243 10.36 9.88071C10.6938 9.63709 11.0805 9.47565 11.4884 9.40951C11.8964 9.34337 12.3142 9.3744 12.7079 9.50007L9.40578 12.8022C9.32302 12.5431 9.28103 12.2726 9.28133 12.0006Z", fill: color }), jsxRuntimeExports.jsx("path", { d: "M11.9065 14.6254C11.8254 14.6254 11.7455 14.6217 11.6663 14.6144L10.4283 15.8524C11.1729 16.1375 11.9842 16.2009 12.764 16.0348C13.5438 15.8687 14.2589 15.4803 14.8227 14.9165C15.3864 14.3527 15.7749 13.6377 15.9409 12.8579C16.107 12.078 16.0436 11.2668 15.7585 10.5222L14.5205 11.7602C14.5278 11.8394 14.5315 11.9193 14.5315 12.0004C14.5317 12.3452 14.464 12.6866 14.3321 13.0052C14.2002 13.3237 14.0069 13.6132 13.7631 13.857C13.5193 14.1008 13.2299 14.2941 12.9113 14.426C12.5927 14.5578 12.2513 14.6256 11.9065 14.6254Z", fill: color })] })) : (jsxRuntimeExports.jsx("svg", { width: width, height: height, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: jsxRuntimeExports.jsx("path", { d: "M22.0829 11.3954C19.861 6.71497 16.5024 4.3595 12.0001 4.3595C7.49539 4.3595 4.13914 6.71497 1.91726 11.3978C1.82814 11.5865 1.78192 11.7926 1.78192 12.0013C1.78192 12.21 1.82814 12.4161 1.91726 12.6048C4.13914 17.2853 7.49773 19.6407 12.0001 19.6407C16.5048 19.6407 19.861 17.2853 22.0829 12.6025C22.2634 12.2228 22.2634 11.7822 22.0829 11.3954ZM12.0001 17.9532C8.21961 17.9532 5.45164 16.0361 3.49929 12.0001C5.45164 7.96418 8.21961 6.047 12.0001 6.047C15.7805 6.047 18.5485 7.96418 20.5009 12.0001C18.5509 16.0361 15.7829 17.9532 12.0001 17.9532ZM11.9063 7.87512C9.6282 7.87512 7.78132 9.722 7.78132 12.0001C7.78132 14.2782 9.6282 16.1251 11.9063 16.1251C14.1844 16.1251 16.0313 14.2782 16.0313 12.0001C16.0313 9.722 14.1844 7.87512 11.9063 7.87512ZM11.9063 14.6251C10.4555 14.6251 9.28132 13.4509 9.28132 12.0001C9.28132 10.5493 10.4555 9.37512 11.9063 9.37512C13.3571 9.37512 14.5313 10.5493 14.5313 12.0001C14.5313 13.4509 13.3571 14.6251 11.9063 14.6251Z", fill: color }) }));
};
EyeIcon.propTypes = {
    /**
     * How height should the icon be?
     */
    height: PropTypes.number,
    /**
     * How width should the icon be?
     */
    width: PropTypes.number,
    /**
     * Alternate white and dark mode
     */
    color: PropTypes.string,
    /**
     * Alternate on and off eye
     */
    off: PropTypes.bool,
};

const LoginIcon = ({ height = 100, width = 120, color = '#000000' }) => {
    return jsxRuntimeExports.jsxs("svg", { width: width, height: height, viewBox: '0 0 21 21', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: [jsxRuntimeExports.jsxs("g", { "clip-path": 'url(#clip0_87_4636)', children: [jsxRuntimeExports.jsx("path", { d: 'M20.6699 18.8463C20.557 18.8767 20.4415 18.8969 20.3249 18.9069C16.3369 18.9069\n12.3489 18.9069 8.36091 18.9069C8.28691 18.9069 8.21391 18.8952 8.09991 18.8864V16.4532H\n18.0669V4.19735H17.5669C14.5669 4.19735 11.5669 4.19051 8.56091 4.20516C8.17791 4.20516\n8.03091 4.12705 8.05291 3.72575C8.08891 3.07448 8.06291 2.42127 8.06291 1.70947H8.58891C\n12.4556 1.70947 16.3239 1.70947 20.1939 1.70947C20.3551 1.71927 20.5155 1.7395\n20.6739 1.77001L20.6699 18.8463Z', fill: color }), jsxRuntimeExports.jsx("path", { d: 'M0.5 9.12813C0.692 9.11055 0.883 9.07834 1.075 9.07834C4.047 9.07834 7.019 9.07834\n9.991 9.07834H10.555V6.6051L15.626 10.3154L10.588 14.0062V11.5652H10.028C7.028 11.5652\n4.02633 11.5652 1.023 11.5652C0.847085 11.5506 0.672366 11.5245 0.5 11.4871L0.5\n9.12813Z', fill: color })] }), jsxRuntimeExports.jsx("defs", { children: jsxRuntimeExports.jsx("clipPath", { id: 'clip0_87_4636', children: jsxRuntimeExports.jsx("rect", { width: '20', height: '20', fill: color, transform: 'translate(0.5 0.121582)' }) }) })] });
};
LoginIcon.propTypes = {
    /**
     * How height should the icon be?
     */
    height: PropTypes.number,
    /**
     * How width should the icon be?
     */
    width: PropTypes.number,
    /**
     * Alternate white and dark mode
     */
    color: PropTypes.string,
};

const NotApprovedIcon = ({ height = 100, width = 100, color = '#000000', outline = false }) => {
    return outline ?
        (jsxRuntimeExports.jsxs("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsxRuntimeExports.jsx("path", { d: "M16.0644 8.31497C16.0644 8.21185 15.98 8.12747 15.8769 8.12747L14.3301 8.1345L12.0004 10.9118L9.67304 8.13685L8.12382 8.12982C8.0207 8.12982 7.93633 8.21185 7.93633 8.31732C7.93633 8.36185 7.95273 8.40404 7.98086 8.43919L11.0301 12.072L7.98086 15.7025C7.95254 15.7368 7.93682 15.7798 7.93633 15.8243C7.93633 15.9275 8.0207 16.0118 8.12382 16.0118L9.67304 16.0048L12.0004 13.2275L14.3277 16.0025L15.8746 16.0095C15.9777 16.0095 16.0621 15.9275 16.0621 15.822C16.0621 15.7775 16.0457 15.7353 16.0175 15.7001L12.973 12.0697L16.0222 8.43685C16.0504 8.40403 16.0644 8.3595 16.0644 8.31497Z", fill: color }), jsxRuntimeExports.jsx("path", { d: "M12 1.52356C6.20156 1.52356 1.5 6.22512 1.5 12.0236C1.5 17.822 6.20156 22.5236 12 22.5236C17.7984 22.5236 22.5 17.822 22.5 12.0236C22.5 6.22512 17.7984 1.52356 12 1.52356ZM12 20.7423C7.18594 20.7423 3.28125 16.8376 3.28125 12.0236C3.28125 7.2095 7.18594 3.30481 12 3.30481C16.8141 3.30481 20.7188 7.2095 20.7188 12.0236C20.7188 16.8376 16.8141 20.7423 12 20.7423Z", fill: color })] })) :
        (jsxRuntimeExports.jsxs("svg", { width: width, height: height, viewBox: '0 0 61 61', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: [jsxRuntimeExports.jsxs("g", { "clip-path": 'url(#clip0_211_13632)', children: [jsxRuntimeExports.jsx("path", { d: 'M29.995 1.60068e-05C35.9355 -0.00611655 41.7443 1.75002 46.6865 5.04621C51.6286\n8.34239 55.4819 13.0305 57.7589 18.5173C60.0358 24.0041 60.634 30.043 59.4778 35.8699C58.3216\n41.6968 55.463 47.0498 51.2636 51.2516C47.0642 55.4533 41.7129 58.315 35.8866 59.4745C30.0604\n60.634 24.0211 60.0392 18.533 57.7654C13.0449 55.4915 8.35465 51.6409 5.05566 46.7006C1.75668\n41.7603 -0.0027485 35.9525 1.81691e-05 30.012C-0.00432056 26.071 0.768438 22.1678 2.27408\n18.5257C3.77973 14.8836 5.98871 11.5742 8.77464 8.78666C11.5606 5.99915 14.8688 3.78829\n18.51 2.28059C22.1512 0.77288 26.054 -0.00208973 29.995 1.60068e-05Z', fill: color }), jsxRuntimeExports.jsx("path", { d: 'M40.9975 44.0427C40.6042 44.0432 40.2147 43.966 39.8514 43.8155C39.4881 43.665\n39.1581 43.4442 38.8805 43.1657L16.9305 21.2157C16.6525 20.9378 16.432 20.6078 16.2816\n20.2447C16.1311 19.8815 16.0537 19.4923 16.0537 19.0992C16.0537 18.7061 16.1311 18.3169\n16.2816 17.9538C16.432 17.5906 16.6525 17.2606 16.9305 16.9827C17.2084 16.7048 17.5384\n16.4843 17.9015 16.3338C18.2647 16.1834 18.6539 16.106 19.047 16.106C19.44 16.106 19.8293\n16.1834 20.1924 16.3338C20.5556 16.4843 20.8855 16.7048 21.1635 16.9827L43.1135 38.9327C43.5323\n39.3513 43.8176 39.8847 43.9332 40.4655C44.0487 41.0462 43.9895 41.6482 43.7628 42.1953C43.5362\n42.7423 43.1524 43.2098 42.66 43.5387C42.1675 43.8676 41.5896 44.043 40.9975 44.0427Z', fill: 'white' }), jsxRuntimeExports.jsx("path", { d: 'M19.0465 44.0427C18.6532 44.0432 18.2638 43.966 17.9005 43.8155C17.5371 43.665\n17.2072 43.4442 16.9295 43.1657C16.6515 42.8878 16.431 42.5578 16.2806 42.1947C16.1302\n41.8315 16.0527 41.4423 16.0527 41.0492C16.0527 40.6561 16.1302 40.2669 16.2806 39.9038C16.431\n39.5406 16.6515 39.2106 16.9295 38.9327L38.8805 16.9827C39.1584 16.7048 39.4884 16.4843\n39.8515 16.3338C40.2147 16.1834 40.6039 16.106 40.997 16.106C41.3901 16.106 41.7793 16.1834\n42.1425 16.3338C42.5056 16.4843 42.8356 16.7048 43.1135 16.9827C43.3915 17.2606 43.612 17.5906\n43.7624 17.9538C43.9128 18.3169 43.9903 18.7061 43.9903 19.0992C43.9903 19.4923 43.9128\n19.8815 43.7624 20.2447C43.612 20.6078 43.3915 20.9378 43.1135 21.2157L21.1635 43.1657C20.8858\n43.4442 20.5558 43.665 20.1925 43.8155C19.8292 43.966 19.4397 44.0432 19.0465 44.0427Z', fill: 'white' })] }), jsxRuntimeExports.jsx("defs", { children: jsxRuntimeExports.jsx("clipPath", { id: 'clip0_211_13632', children: jsxRuntimeExports.jsx("rect", { width: '60.045', height: '60.052', fill: 'white' }) }) })] }));
};
NotApprovedIcon.propTypes = {
    /**
     * How height should the icon be?
     */
    height: PropTypes.number,
    /**
     * How width should the icon be?
     */
    width: PropTypes.number,
    /**
     * Alternate white and dark mode
     */
    color: PropTypes.string,
    outline: PropTypes.bool,
};

const OpenCameraIcon = ({ height = 100, width = 100 }) => {
    return jsxRuntimeExports.jsxs("svg", { width: width, height: height, viewBox: "0 0 60 59", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsxRuntimeExports.jsx("path", { d: "M37.0172 33.4179C36.0548 33.2391 35.7801 32.9154 35.7801 31.9283C35.7801 23.0191 35.7801 14.1097 35.7801 5.19995C35.7801 3.80689 35.204 3.23733 33.7654 3.25342C33.0282 3.26147 32.1253 2.97008 31.6015 3.37065C31.1079 3.74797 31.0026 4.6125 30.7325 5.26522C30.2508 6.42759 30.1299 6.5082 28.8542 6.50731C25.5362 6.50731 22.2179 6.50731 18.8993 6.50731C17.968 6.50731 17.7226 6.33551 17.3893 5.47893C17.1484 4.8584 16.8947 4.24327 16.6777 3.6147C16.6536 3.49499 16.5829 3.38908 16.4804 3.31935C16.3778 3.24961 16.2516 3.22154 16.1282 3.24098C15.512 3.26155 14.8947 3.24818 14.2775 3.24818C12.8453 3.24818 12.2913 3.79803 12.2913 5.21523C12.2913 7.20914 12.2913 9.203 12.2913 11.1969C12.2913 21.8514 12.2913 32.5059 12.2913 43.1604C12.2913 44.5284 12.8646 45.0907 14.2629 45.0907C19.1981 45.0907 24.1333 45.0907 29.0685 45.0907C29.3018 45.0739 29.5363 45.0887 29.7654 45.1346C29.9952 45.2009 30.1974 45.3372 30.3423 45.5236C30.4872 45.71 30.5674 45.9366 30.571 46.1706C30.5747 46.4046 30.5018 46.6338 30.3628 46.8244C30.2238 47.0151 30.026 47.1572 29.7984 47.2304C29.5312 47.2972 29.2553 47.3246 28.9798 47.3119C24.0452 47.316 19.1099 47.316 14.174 47.3119C13.6188 47.3545 13.0608 47.2796 12.5379 47.0925C12.0151 46.9053 11.5396 46.6102 11.1441 46.2274C10.7486 45.8445 10.4424 45.3829 10.2463 44.874C10.0501 44.365 9.96863 43.8209 10.0075 43.2785C10.0026 30.5264 10.0026 17.7741 10.0075 5.02204C9.97056 4.48483 10.0519 3.94618 10.2461 3.44225C10.4403 2.93832 10.7428 2.48083 11.1333 2.10061C11.5237 1.7204 11.993 1.42618 12.5097 1.23792C13.0263 1.04966 13.5782 0.971668 14.1283 1.00915C20.7436 1.00438 27.3592 1.00438 33.9751 1.00915C34.5191 0.983301 35.0626 1.06906 35.5707 1.26062C36.0788 1.45218 36.5402 1.74546 36.9252 2.12157C37.3102 2.49768 37.6103 2.94826 37.8063 3.44443C38.0023 3.9406 38.0897 4.47125 38.063 5.00239C38.0691 10.7761 38.0657 16.5499 38.0529 22.3236C38.0346 22.5236 38.0795 22.7242 38.1814 22.8986C38.2834 23.0729 38.4377 23.2128 38.6234 23.2991C42.2629 25.5471 45.4202 28.4641 47.92 31.8881C49.3541 33.7738 49.4841 35.8401 49.3596 38.0361C49.1279 42.1438 48.68 46.2264 48.1132 50.3001C48.0509 50.7472 48.1544 50.856 48.6114 50.8489C49.6123 50.8319 50.0079 51.237 49.9979 52.2045C49.9808 53.9075 49.9557 55.6106 49.9227 57.3137C49.9426 57.4805 49.9237 57.6496 49.8674 57.8083C49.8111 57.967 49.719 58.1113 49.5978 58.2305C49.4765 58.3497 49.3293 58.4406 49.1671 58.4966C49.0049 58.5526 48.8318 58.5721 48.6608 58.5538C45.5977 58.5636 42.5345 58.5538 39.4713 58.5619C39.1927 58.5806 38.9159 58.5062 38.6863 58.351C38.4566 58.1958 38.2879 57.9691 38.2077 57.7079C38.1024 57.3905 37.9531 57.3939 37.7178 57.3957C37.4432 57.41 37.1681 57.41 36.8936 57.3957C36.4091 57.3483 36.0694 57.4119 35.9036 57.969C35.8224 58.1649 35.6773 58.3292 35.4907 58.4363C35.3041 58.5435 35.0865 58.5877 34.8716 58.5619C34.0209 58.5681 33.1702 58.5788 32.3195 58.5619C32.1589 58.573 31.9977 58.5499 31.8471 58.4944C31.6964 58.439 31.5598 58.3524 31.4466 58.2405C31.3335 58.1286 31.2466 57.9941 31.1918 57.8463C31.1369 57.6985 31.1155 57.5408 31.129 57.3842C31.1112 55.5959 31.1112 53.8101 31.129 52.0266C31.1132 51.8647 31.1349 51.7014 31.1923 51.5487C31.2498 51.3961 31.3416 51.2578 31.4611 51.1445C31.5805 51.0311 31.7246 50.9454 31.8825 50.8936C32.0404 50.8419 32.2081 50.8254 32.3735 50.8454C32.9476 50.8329 33.5209 50.8312 34.095 50.824C37.7699 50.8312 41.4457 50.8241 45.1206 50.8589C45.67 50.8643 45.7918 50.6533 45.845 50.1973C46.0189 48.6951 46.2451 47.1982 46.4136 45.6943C46.8267 42.4643 47.0651 39.2153 47.1279 35.9608C47.1373 35.2115 46.9137 34.477 46.4868 33.8543C44.4027 30.7368 41.7241 28.0397 38.5968 25.9099C38.4641 25.8205 38.3295 25.6416 38.1601 25.7176C37.9769 25.8016 38.0758 26.0153 38.0749 26.1647C38.0676 28.0933 38.0749 30.023 38.0694 31.9516C38.063 32.8842 37.9009 33.1014 37.0172 33.4179Z", fill: "#141414" }), jsxRuntimeExports.jsx("path", { d: "M37.0141 35.5344C37.1973 35.7025 37.3805 35.8724 37.57 36.036C37.7003 36.1262 37.8103 36.2414 37.8934 36.3746C37.9765 36.5078 38.031 36.6559 38.0535 36.8103C38.0759 36.9647 38.066 37.122 38.0241 37.2724C37.9822 37.4229 37.9093 37.5636 37.8099 37.6857C37.7087 37.8068 37.5823 37.9058 37.4392 37.976C37.2961 38.0462 37.1395 38.0861 36.9796 38.0932C36.8196 38.1003 36.6599 38.0743 36.5109 38.017C36.3618 37.9597 36.2269 37.8725 36.1148 37.7608C34.1806 36.2625 32.4859 34.4912 31.0865 32.5051C30.5516 31.6082 29.8931 30.7872 29.1296 30.065C28.7798 29.7771 28.4043 29.3451 27.9107 29.5874C27.4528 29.81 27.4611 30.3466 27.4318 30.8053C27.4072 31.9514 27.7045 33.0823 28.2917 34.0751C29.9537 37.2466 31.744 40.3555 33.2577 43.6021C33.8675 44.9015 34.4025 46.2331 34.8602 47.5907C35.1496 48.4572 34.9519 48.8837 34.0847 49.2672C33.8088 49.316 33.5242 49.265 33.2841 49.1238C33.0439 48.9826 32.8647 48.761 32.7797 48.5002C31.3219 44.186 28.9959 40.2742 26.8796 36.2604C26.0846 34.9844 25.5205 33.5842 25.212 32.1214C25.0438 31.177 25.1123 30.2071 25.4117 29.2942C25.5318 28.8655 25.7558 28.4712 26.0648 28.1447C26.3738 27.8182 26.7586 27.569 27.1869 27.4182C27.6152 27.2674 28.0744 27.2195 28.5256 27.2783C28.9769 27.3371 29.407 27.5011 29.7797 27.7564C30.7872 28.3844 31.6345 29.2287 32.2569 30.225C33.3818 31.9633 34.731 33.553 36.2714 34.955C36.5068 35.1616 36.7659 35.3413 37.0141 35.5344Z", fill: "#141414" }), jsxRuntimeExports.jsx("path", { d: "M24.0115 44.0393C23.7297 44.1021 23.4343 44.0644 23.1784 43.9333C22.9226 43.8021 22.7231 43.5861 22.6159 43.324C22.5186 43.1026 22.5018 42.8553 22.5684 42.6233C22.6351 42.3913 22.7811 42.1886 22.9821 42.0489C23.2954 41.8778 23.6484 41.7881 24.0073 41.7881C24.3663 41.7881 24.7192 41.8778 25.0325 42.0489C25.2356 42.1862 25.3838 42.3877 25.4523 42.6193C25.5207 42.851 25.5051 43.0988 25.408 43.3205C25.3007 43.5828 25.1012 43.7993 24.8453 43.9311C24.5893 44.0628 24.2938 44.1011 24.0115 44.0393Z", fill: "#141414" }), jsxRuntimeExports.jsx("path", { d: "M24.1054 22.9073C22.4852 22.9073 20.8652 22.9073 19.2456 22.9073C18.3042 22.9073 17.916 22.5316 17.915 21.6196C17.915 19.727 17.915 17.8346 17.915 15.942C17.915 14.9987 18.2969 14.6303 19.2666 14.6268C19.8875 14.6268 20.5084 14.6132 21.1284 14.632C21.2395 14.6515 21.3539 14.6279 21.4473 14.5661C21.5408 14.5043 21.6058 14.4093 21.6284 14.3013C21.676 14.1466 21.7603 14.0027 21.8235 13.8542C21.8909 13.6633 22.0193 13.4984 22.1897 13.384C22.3601 13.2696 22.5636 13.2115 22.7703 13.2183C23.6934 13.2088 24.6167 13.2088 25.5404 13.2183C25.7715 13.2111 25.9977 13.2843 26.1787 13.4248C26.3597 13.5654 26.4837 13.7642 26.5285 13.9856C26.5448 14.097 26.5851 14.2038 26.6468 14.2989C26.7084 14.394 26.7899 14.475 26.8861 14.537C26.9822 14.5991 27.0907 14.6406 27.2045 14.6586C27.3182 14.6767 27.4345 14.6709 27.5458 14.6418C28.1049 14.605 28.6658 14.602 29.2253 14.6329C29.3817 14.6204 29.5391 14.6413 29.6863 14.6942C29.8335 14.7471 29.9671 14.8308 30.0779 14.9394C30.1886 15.0479 30.2738 15.1787 30.3274 15.3227C30.381 15.4667 30.4017 15.6204 30.3883 15.773C30.3981 17.7693 30.3981 19.7662 30.3883 21.7637C30.4044 21.9201 30.3843 22.078 30.3295 22.2258C30.2747 22.3736 30.1866 22.5075 30.0717 22.6176C29.9568 22.7277 29.8181 22.8111 29.6657 22.8619C29.5134 22.9127 29.3513 22.9294 29.1914 22.9108C27.4964 22.9108 25.8005 22.9064 24.1054 22.9073ZM27.5139 18.763C27.5122 18.1136 27.3132 17.4792 26.9421 16.9402C26.571 16.4013 26.0445 15.9819 25.4292 15.7353C24.8139 15.4887 24.1375 15.426 23.4856 15.555C22.8337 15.6839 22.2357 15.999 21.7672 16.46C21.2988 16.921 20.981 17.5073 20.8541 18.1448C20.7271 18.7823 20.7968 19.4423 21.0542 20.0411C21.3116 20.6399 21.7452 21.1506 22.3001 21.5087C22.855 21.8668 23.5063 22.056 24.1714 22.0525C25.0604 22.0461 25.9106 21.6967 26.5366 21.0804C27.1627 20.4641 27.5136 19.631 27.5129 18.763H27.5139ZM19.5285 15.6558C19.2099 15.637 18.8967 15.6137 18.9031 16.0957C18.9095 16.5508 19.2118 16.525 19.5213 16.5187C19.8308 16.5125 20.1678 16.592 20.1742 16.0904C20.1806 15.5888 19.8601 15.6433 19.5276 15.6558H19.5285Z", fill: "#E8407C" }), jsxRuntimeExports.jsx("path", { d: "M21.8985 18.7441C21.904 18.309 22.0414 17.8855 22.2935 17.5267C22.5455 17.1679 22.9007 16.8901 23.3144 16.7284C23.7281 16.5667 24.1816 16.5282 24.6176 16.6181C25.0536 16.708 25.4525 16.9221 25.7639 17.2333C26.0753 17.5445 26.2853 17.9388 26.3672 18.3664C26.4492 18.7941 26.3994 19.236 26.2243 19.636C26.0491 20.0361 25.7564 20.3765 25.3832 20.6142C25.01 20.8519 24.573 20.9761 24.1274 20.9713C23.5298 20.9631 22.96 20.7242 22.5423 20.3069C22.1246 19.8895 21.8931 19.3276 21.8985 18.7441Z", fill: "#E8407C" })] });
};
OpenCameraIcon.propTypes = {
    /**
     * How height should the icon be?
     */
    height: PropTypes.number,
    /**
     * How width should the icon be?
     */
    width: PropTypes.number,
    /**
     * Alternate white and dark mode
     */
    color: PropTypes.string,
};

const OpenLinkIcon = ({ height = 100, width = 100 }) => {
    return jsxRuntimeExports.jsxs("svg", { width: width, height: height, viewBox: "0 0 60 59", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsxRuntimeExports.jsx("path", { d: "M33.4753 21.0605H31.1547C30.8163 21.0516 30.4947 20.9142 30.2586 20.6774C30.0224 20.4405 29.8903 20.123 29.8903 19.7924C29.8903 19.4618 30.0224 19.1443 30.2586 18.9074C30.4947 18.6706 30.8163 18.5331 31.1547 18.5242H32.1761V11.9663H17.0899V18.5242H20.0108C20.3492 18.5331 20.6706 18.6706 20.9068 18.9074C21.1429 19.1443 21.2751 19.4618 21.2751 19.7924C21.2751 20.123 21.1429 20.4405 20.9068 20.6774C20.6706 20.9142 20.3492 21.0516 20.0108 21.0605H15.7885C15.6179 21.0607 15.4489 21.0279 15.2912 20.9642C15.1335 20.9005 14.9902 20.8071 14.8695 20.6893C14.7488 20.5714 14.6531 20.4315 14.5878 20.2776C14.5226 20.1236 14.4891 19.9586 14.4893 19.7919V10.6977C14.4893 10.3612 14.6261 10.0385 14.8697 9.80056C15.1134 9.56264 15.4439 9.42883 15.7885 9.42883H33.4744C33.819 9.42883 34.1495 9.56264 34.3932 9.80056C34.6369 10.0385 34.7738 10.3612 34.7738 10.6977V19.7919C34.7739 19.9585 34.7404 20.1234 34.6752 20.2773C34.61 20.4312 34.5144 20.5712 34.3939 20.689C34.2733 20.8069 34.13 20.9002 33.9724 20.964C33.8148 21.0277 33.6459 21.0605 33.4753 21.0605Z", fill: "#E8407C" }), jsxRuntimeExports.jsx("path", { d: "M23.3557 43.3028C23.1488 43.4464 22.9985 43.655 22.9299 43.8937C22.8614 44.1324 22.8786 44.3869 22.9788 44.6147C23.1399 44.8419 23.355 45.0274 23.6058 45.1553C23.8566 45.2833 24.1355 45.3498 24.4184 45.3492C24.7014 45.3486 24.9799 45.2808 25.2301 45.1518C25.4803 45.0227 25.6946 44.8361 25.8546 44.6082C25.9542 44.3802 25.9701 44.1256 25.8998 43.8874C25.8294 43.6492 25.6769 43.4421 25.4682 43.301C25.1452 43.1253 24.7815 43.0331 24.4117 43.0334C24.042 43.0338 23.6785 43.1265 23.3557 43.3028Z", fill: "#141414" }), jsxRuntimeExports.jsx("path", { d: "M47.0575 47.1067C48.0177 46.8537 48.5001 47.151 48.7309 48.0867C49.1361 49.7335 49.5337 51.3818 49.9238 53.0317C49.9845 53.188 50.0083 53.3555 49.9934 53.522C49.9785 53.6886 49.9254 53.8496 49.8379 53.9933C49.7504 54.137 49.6308 54.2597 49.4881 54.352C49.3454 54.4443 49.1832 54.5041 49.0135 54.5267C46.0615 55.2627 43.1057 55.9747 40.1565 56.7052C39.8923 56.7888 39.6068 56.7822 39.347 56.6866C39.0871 56.591 38.8682 56.412 38.7262 56.179C38.5453 55.8974 38.4021 55.9371 38.1759 55.995C37.9127 56.0727 37.6453 56.1366 37.3751 56.1864C36.8973 56.2545 36.5854 56.3961 36.5628 56.973C36.5449 57.4137 36.1567 57.6767 35.7147 57.789C34.895 57.9951 34.0772 58.2058 33.2518 58.3889C33.0996 58.4382 32.9381 58.4545 32.7788 58.437C32.6194 58.4194 32.4657 58.3684 32.3286 58.2872C32.1914 58.206 32.074 58.0967 31.9843 57.9669C31.8946 57.837 31.8349 57.6895 31.8093 57.5349C31.3501 55.8176 30.9065 54.0954 30.4787 52.3682C30.4233 52.2157 30.4037 52.0532 30.4213 51.8923C30.4389 51.7314 30.4934 51.5764 30.5806 51.4388C30.6678 51.3012 30.7855 51.1843 30.9251 51.0971C31.0647 51.0099 31.2226 50.9546 31.3871 50.935C31.9374 50.7887 32.4905 50.6497 33.0417 50.508C36.5883 49.6469 40.131 48.772 43.6842 47.9366L47.0575 47.1067Z", fill: "#141414" }), jsxRuntimeExports.jsx("path", { d: "M40.2792 25.4415C37.7309 23.9115 34.9943 22.7035 32.1346 21.8461H32.1279C31.5641 20.5153 31.146 19.1301 30.8804 17.7135C30.5035 15.5055 29.7846 14.0777 28.6765 13.361C28.2044 13.0865 27.6782 12.9125 27.1324 12.8507C26.5866 12.7888 26.0336 12.8404 25.5097 13.0021C25.0823 13.1044 24.6819 13.294 24.3348 13.5582C23.9878 13.8224 23.7019 14.1551 23.496 14.5348C22.534 16.2157 22.6999 19.0319 23.9879 22.907C24.1199 23.3035 24.2941 23.7699 24.5043 24.2989C24.3093 24.3234 24.117 24.3647 23.9295 24.4222C23.3143 24.5819 22.7724 24.9398 22.3914 25.4377C22.0104 25.9356 21.8126 26.5443 21.8302 27.1656C21.8641 27.6063 21.948 28.3892 22.0507 29.3506C22.29 31.5816 22.6509 34.9517 22.6829 36.9674C22.7253 39.5618 25.3645 41.988 27.2923 43.759C27.8255 44.2261 28.3316 44.7219 28.8084 45.2439C29.6014 46.2263 30.287 47.287 30.854 48.4086C30.9935 48.6528 31.2225 48.8362 31.495 48.9219C31.7676 49.0075 32.0632 48.9891 32.3223 48.8702C32.5814 48.7514 32.7847 48.541 32.8912 48.2815C32.9976 48.022 32.9993 47.7327 32.8959 47.472C32.254 46.19 31.4727 44.979 30.5657 43.86C30.027 43.2575 29.4508 42.6878 28.8404 42.1543C27.2056 40.652 24.9669 38.5939 24.9405 36.9315C24.9057 34.8154 24.5532 31.5255 24.295 29.1206C24.1961 28.1877 24.1133 27.4279 24.0812 26.9992C24.0699 26.8538 24.2847 26.6228 24.6117 26.5216C24.8063 26.4507 25.0212 26.4542 25.2134 26.5313C25.4055 26.6084 25.5608 26.7533 25.6481 26.9374C26.6846 28.632 27.5637 32.8853 27.672 34.3031C27.7124 34.5805 27.8593 34.8326 28.083 35.0081C28.3066 35.1837 28.5904 35.2695 28.8765 35.2485C29.1627 35.2274 29.4299 35.101 29.624 34.8947C29.8182 34.6884 29.9248 34.4177 29.9222 34.1375C29.8034 32.5947 28.864 27.8988 27.5854 25.8076C27.5172 25.7012 27.4428 25.5987 27.363 25.5003C27.36 25.3564 27.328 25.2146 27.2688 25.0828C26.7486 23.8932 26.3661 22.9309 26.1315 22.2262C24.6531 17.7825 25.1714 16.119 25.4616 15.6094C25.5168 15.4953 25.597 15.3947 25.6964 15.3142C25.7959 15.2338 25.9122 15.1757 26.0373 15.144C26.2601 15.0576 26.499 15.0178 26.7385 15.0272C26.9781 15.0365 27.213 15.0947 27.4281 15.1981C27.7381 15.3977 28.3071 16.0371 28.6529 18.0731C29.1826 20.5631 30.0214 22.9808 31.1508 25.2723C31.6455 26.3902 32.1571 27.5456 32.583 28.6891C32.6254 28.8351 32.6981 28.971 32.7966 29.0883C32.8951 29.2056 33.0173 29.3017 33.1556 29.3708C33.2939 29.44 33.4453 29.4806 33.6004 29.4901C33.7554 29.4996 33.9107 29.4776 34.0568 29.4259C34.2028 29.3741 34.3364 29.2935 34.4491 29.1891C34.5618 29.0847 34.6513 28.9588 34.7119 28.8192C34.7726 28.6795 34.803 28.5291 34.8015 28.3774C34.8 28.2257 34.7665 28.0761 34.7031 27.9376C34.2772 26.794 33.7825 25.6688 33.2991 24.5767C34.2649 24.9309 35.2053 25.3128 36.0797 25.7148V25.7285C36.4615 26.9453 36.7524 28.1875 36.9503 29.4454C36.9755 29.6769 37.0749 29.8948 37.2345 30.0678C37.3941 30.2408 37.6056 30.3602 37.8388 30.4088C37.9536 30.4328 38.0716 30.4391 38.1884 30.4272C38.4858 30.3963 38.7585 30.2516 38.9469 30.0249C39.1354 29.7982 39.2241 29.5077 39.1938 29.2172C39.1041 28.5176 38.9716 27.8241 38.7971 27.14C38.8706 27.1851 38.9545 27.2319 39.0242 27.2779C39.5729 27.6358 40.1013 28.0225 40.6071 28.4362C40.6071 28.4445 40.6071 28.4537 40.6071 28.4629C40.7777 29.1694 40.8582 29.8937 40.8465 30.6194C40.854 30.9286 40.8625 31.2137 40.8832 31.4575C40.9033 31.6937 41.0008 31.9172 41.1612 32.0951C41.3215 32.2731 41.5363 32.396 41.7737 32.4455C41.8804 32.4678 41.9899 32.4746 42.0987 32.4657C42.3974 32.4423 42.6743 32.3041 42.8687 32.0814C43.063 31.8587 43.1588 31.5697 43.1352 31.278C43.1295 31.2062 43.1258 31.1253 43.122 31.0462C44.3222 32.5936 44.9951 34.4695 45.0461 36.4099C44.6893 40.7246 44.0453 45.0119 43.1182 49.2449C43.0749 49.5231 43.1422 49.8069 43.3061 50.0384C43.47 50.2699 43.7182 50.4316 44.0001 50.4903C44.282 50.5491 44.5762 50.5005 44.8226 50.3545C45.069 50.2085 45.2491 49.9761 45.3259 49.7049C46.2834 45.3321 46.9444 40.9024 47.3046 36.4447C47.3319 34.9451 46.889 29.7324 40.2792 25.4415Z", fill: "#141414" }), jsxRuntimeExports.jsx("path", { d: "M27.2328 46.4363H14.3872C13.8476 46.4361 13.3301 46.2266 12.9486 45.8539C12.5672 45.4813 12.3529 44.9761 12.3529 44.4492C12.3529 33.4864 12.3529 22.5235 12.3529 11.5607C12.3529 9.50911 12.3529 7.45783 12.3529 5.40683C12.3529 3.81521 13.0294 3.28624 14.8102 3.39296C15.2782 3.42233 15.7479 3.4173 16.2152 3.37814C16.5845 3.34594 16.7598 3.43898 16.8691 3.75638C17.0924 4.40039 17.3524 5.03702 17.6012 5.67367C17.9441 6.55503 18.1977 6.73069 19.155 6.73069C22.569 6.73069 25.9834 6.73069 29.398 6.73069C30.7096 6.73069 30.835 6.64888 31.3306 5.45287C31.6133 4.78127 31.7169 3.88873 32.2248 3.50325C32.7637 3.09108 33.6928 3.39114 34.4513 3.38286C35.9297 3.3663 36.5242 3.95236 36.5242 5.38482C36.5242 11.1809 36.5242 15.0677 36.5242 20.8601C36.5241 21.0108 36.5544 21.1601 36.6133 21.2994C36.6723 21.4387 36.7589 21.5654 36.868 21.672C36.9771 21.7787 37.1067 21.8632 37.2493 21.9209C37.3919 21.9786 37.5448 22.0083 37.6991 22.0083C38.011 22.0083 38.3102 21.8874 38.5307 21.672C38.7512 21.4567 38.8751 21.1646 38.8751 20.8601C38.8751 19.0891 38.8751 19.2197 38.8751 17.4478H38.8675C38.8725 13.3599 38.8751 9.27185 38.8751 5.18334C38.8731 4.09506 38.4292 3.0519 37.6407 2.28271C36.8522 1.51352 35.7835 1.08089 34.6689 1.07992C27.8622 1.07378 21.0552 1.07378 14.2478 1.07992C13.1232 1.07992 12.0447 1.51619 11.2496 2.29259C10.4544 3.069 10.0077 4.12195 10.0077 5.21995C10.0014 18.3368 10.0014 31.4536 10.0077 44.5705C9.96786 45.1286 10.0517 45.6886 10.2536 46.2122C10.4555 46.7357 10.7706 47.2105 11.1776 47.6043C11.5845 47.9981 12.0737 48.3017 12.6116 48.4942C13.1496 48.6867 13.7236 48.7635 14.2948 48.7197C17.0942 48.7197 24.4391 48.7197 27.2375 48.7197C27.5478 48.7195 27.8453 48.5991 28.0647 48.3848C28.2842 48.1706 28.4075 47.8801 28.4077 47.5771C28.4075 47.4268 28.3769 47.2781 28.3177 47.1394C28.2585 47.0006 28.1718 46.8747 28.0627 46.7688C27.9535 46.6628 27.824 46.5789 27.6816 46.5219C27.5392 46.4649 27.3867 46.4357 27.2328 46.4363Z", fill: "#141414" })] });
};
OpenLinkIcon.propTypes = {
    /**
     * How height should the icon be?
     */
    height: PropTypes.number,
    /**
     * How width should the icon be?
     */
    width: PropTypes.number,
    /**
     * Alternate white and dark mode
     */
    color: PropTypes.string,
};

const OpenQRIcon = ({ height = 100, width = 100 }) => {
    return jsxRuntimeExports.jsxs("svg", { width: width, height: height, viewBox: "0 0 60 60", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsxRuntimeExports.jsx("path", { d: "M37.0172 33.4958C36.0548 33.317 35.7801 32.9933 35.7801 32.0062C35.7801 23.0971 35.7801 14.1876 35.7801 5.27788C35.7801 3.88482 35.204 3.31079 33.7654 3.33135C33.0282 3.3394 32.1253 3.04801 31.6015 3.44858C31.1079 3.8259 31.0026 4.69043 30.7325 5.34315C30.2508 6.50552 30.1299 6.58613 28.8542 6.58524C25.5362 6.58524 22.2179 6.58524 18.8993 6.58524C17.968 6.58524 17.7226 6.41344 17.3893 5.55686C17.1484 4.93633 16.8947 4.3212 16.6777 3.69263C16.6536 3.57292 16.5829 3.46701 16.4804 3.39728C16.3778 3.32754 16.2516 3.29947 16.1282 3.31891C15.512 3.34037 14.8947 3.32701 14.2775 3.32611C12.8453 3.32611 12.2913 3.87507 12.2913 5.29316C12.2913 7.28707 12.2913 9.28065 12.2913 11.274C12.2913 21.929 12.2913 32.5833 12.2913 43.2365C12.2913 44.6037 12.8646 45.1678 14.2629 45.1678C19.1981 45.1678 24.1333 45.1678 29.0685 45.1678C29.3018 45.151 29.5363 45.1658 29.7654 45.2117C29.9952 45.278 30.1974 45.4143 30.3423 45.6007C30.4872 45.787 30.5674 46.0137 30.571 46.2477C30.5747 46.4817 30.5018 46.7108 30.3628 46.9015C30.2238 47.0921 30.026 47.2343 29.7984 47.3075C29.531 47.3735 29.2552 47.4007 28.9798 47.3881C24.0452 47.3928 19.1099 47.3928 14.174 47.3881C13.6188 47.4306 13.0608 47.3558 12.5379 47.1687C12.0151 46.9815 11.5396 46.6864 11.1441 46.3036C10.7486 45.9207 10.4424 45.4591 10.2463 44.9501C10.0501 44.4412 9.96863 43.8971 10.0075 43.3546C10.0026 30.6031 10.0026 17.8509 10.0075 5.09822C9.97043 4.56094 10.0517 4.02225 10.2458 3.51821C10.4399 3.01417 10.7425 2.55645 11.1329 2.17614C11.5234 1.79583 11.9927 1.50176 12.5094 1.31345C13.0261 1.12513 13.5781 1.04696 14.1283 1.08446C20.7436 1.07969 27.3592 1.07969 33.9751 1.08446C34.5191 1.05847 35.0627 1.14399 35.5708 1.33549C36.079 1.527 36.5404 1.8203 36.9254 2.19644C37.3105 2.57258 37.6107 3.02329 37.8066 3.51952C38.0025 4.01575 38.0898 4.54653 38.063 5.0777C38.0691 10.8514 38.0657 16.6252 38.0529 22.3989C38.0348 22.5988 38.0798 22.7992 38.1818 22.9734C38.2838 23.1476 38.4379 23.2871 38.6234 23.3733C42.2629 25.6213 45.4202 28.5384 47.92 31.9623C49.3541 33.848 49.4841 35.9146 49.3596 38.1106C49.1279 42.2182 48.68 46.3015 48.1132 50.3743C48.0509 50.8214 48.1544 50.9313 48.6114 50.9242C49.6123 50.9063 50.0079 51.3115 49.9979 52.2789C49.9808 53.9819 49.9557 55.6848 49.9227 57.3879C49.9426 57.5547 49.9237 57.7238 49.8674 57.8825C49.8111 58.0413 49.719 58.1858 49.5978 58.3049C49.4765 58.4241 49.3293 58.5148 49.1671 58.5708C49.0049 58.6268 48.8318 58.6463 48.6608 58.628C45.5977 58.6378 42.5345 58.628 39.4713 58.6361C39.1926 58.6548 38.9157 58.5806 38.686 58.4252C38.4564 58.2699 38.2877 58.0428 38.2077 57.7815C38.1024 57.464 37.9531 57.4666 37.7178 57.4684C37.4432 57.4828 37.1681 57.4828 36.8936 57.4684C36.4091 57.421 36.0694 57.4844 35.9036 58.0414C35.8224 58.2374 35.6773 58.4018 35.4907 58.509C35.3041 58.6162 35.0865 58.6602 34.8716 58.6343C34.0209 58.6397 33.1702 58.6504 32.3195 58.6343C32.1589 58.6455 31.9979 58.6225 31.8473 58.5671C31.6967 58.5117 31.5601 58.4252 31.447 58.3134C31.3339 58.2017 31.2469 58.0673 31.192 57.9196C31.1371 57.7719 31.1156 57.6143 31.129 57.4577C31.1112 55.6695 31.1112 53.8831 31.129 52.099C31.113 51.9371 31.1346 51.7738 31.192 51.621C31.2494 51.4682 31.3413 51.33 31.4607 51.2165C31.5802 51.103 31.7242 51.0173 31.8822 50.9655C32.0401 50.9136 32.2081 50.8972 32.3735 50.9172C32.9476 50.9047 33.5209 50.9027 34.095 50.8965C37.7699 50.9036 41.4457 50.8965 45.1206 50.9305C45.67 50.9359 45.7918 50.7258 45.845 50.2689C46.0189 48.7667 46.2451 47.2689 46.4136 45.7659C46.8267 42.5359 47.0651 39.2869 47.1279 36.0324C47.1375 35.2828 46.9139 34.548 46.4868 33.925C44.4027 30.8075 41.7241 28.1104 38.5968 25.9806C38.4641 25.8912 38.3295 25.7125 38.1601 25.7885C37.9769 25.8726 38.0758 26.0863 38.0749 26.2356C38.0676 28.1651 38.0749 30.0946 38.0694 32.0232C38.063 32.9621 37.9009 33.1784 37.0172 33.4958Z", fill: "#141414" }), jsxRuntimeExports.jsx("path", { d: "M37.0147 35.6122C37.1979 35.7803 37.3811 35.9511 37.5706 36.1147C37.7008 36.205 37.8107 36.3201 37.8938 36.4533C37.9768 36.5864 38.0312 36.7348 38.0536 36.8892C38.0761 37.0436 38.0662 37.2006 38.0243 37.3511C37.9825 37.5016 37.9098 37.6422 37.8105 37.7643C37.7093 37.8855 37.5829 37.9844 37.4398 38.0547C37.2967 38.1249 37.1401 38.1648 36.9802 38.1719C36.8202 38.179 36.6605 38.153 36.5115 38.0957C36.3624 38.0384 36.2275 37.9511 36.1154 37.8394C34.1803 36.3418 32.4841 34.5714 31.0825 32.5864C30.5476 31.6895 29.8892 30.8685 29.1256 30.1463C28.7758 29.8584 28.4003 29.4257 27.9067 29.6689C27.4489 29.8925 27.4571 30.4281 27.4278 30.8868C27.4031 32.033 27.7005 33.1638 28.2877 34.1566C29.9497 37.329 31.74 40.4368 33.2537 43.6834C33.8635 44.9828 34.3985 46.3146 34.8563 47.6723C35.1456 48.5387 34.9479 48.9652 34.0807 49.3488C33.8049 49.3975 33.5202 49.3465 33.2801 49.2053C33.04 49.0642 32.8607 48.8423 32.7757 48.5815C31.3179 44.2682 28.9919 40.3555 26.8756 36.3417C26.0805 35.0658 25.5165 33.6658 25.2081 32.2029C25.0399 31.2585 25.1083 30.2884 25.4077 29.3755C25.5277 28.9467 25.7517 28.5524 26.0606 28.2258C26.3695 27.8992 26.7543 27.65 27.1826 27.4991C27.6109 27.3482 28.0701 27.3002 28.5214 27.3589C28.9727 27.4177 29.4029 27.5816 29.7758 27.8368C30.7833 28.465 31.6306 29.3097 32.2529 30.3063C33.3778 32.0446 34.727 33.6343 36.2674 35.0363C36.5073 35.2393 36.7665 35.42 37.0147 35.6122Z", fill: "#141414" }), jsxRuntimeExports.jsx("path", { d: "M24.0116 44.1165C23.7298 44.1794 23.4342 44.1418 23.1783 44.0106C22.9224 43.8795 22.723 43.6633 22.616 43.4011C22.5186 43.1796 22.5018 42.9321 22.5684 42.7C22.6351 42.4678 22.7811 42.265 22.9822 42.1252C23.2957 41.9547 23.6486 41.8652 24.0074 41.8652C24.3662 41.8652 24.7191 41.9547 25.0326 42.1252C25.2355 42.2626 25.3837 42.464 25.4521 42.6956C25.5205 42.9273 25.505 43.175 25.4081 43.3968C25.3008 43.6592 25.1014 43.8757 24.8455 44.0076C24.5896 44.1395 24.294 44.1781 24.0116 44.1165Z", fill: "#141414" }), jsxRuntimeExports.jsx("path", { d: "M19.6272 9.57068V11.0907H16.5659V14.0806H15.0146V10.7831C15.1033 10.4984 15.2623 10.2395 15.4778 10.0291C15.6932 9.81873 15.9585 9.66334 16.25 9.57679L19.6272 9.57068Z", fill: "#E8407C" }), jsxRuntimeExports.jsx("path", { d: "M33.5481 14.0771H31.9978V11.0907H28.9355V9.57068H32.3128C32.6043 9.65723 32.8694 9.8124 33.0849 10.0228C33.3003 10.2331 33.4595 10.4921 33.5481 10.7768V14.0771Z", fill: "#E8407C" }), jsxRuntimeExports.jsx("path", { d: "M15.0146 23.1649H16.5659V26.1549H19.6272V27.6696H16.25C15.9587 27.5827 15.6937 27.4272 15.4783 27.2169C15.2629 27.0066 15.1037 26.7478 15.0146 26.4633V23.1649Z", fill: "#E8407C" }), jsxRuntimeExports.jsx("path", { d: "M28.9355 27.6687V26.1539H31.9978V23.1639H33.5481V26.4624C33.4592 26.7469 33.3 27.0058 33.0845 27.2161C32.8691 27.4265 32.6042 27.5818 32.3128 27.6687H28.9355Z", fill: "#E8407C" }), jsxRuntimeExports.jsx("path", { d: "M18.1387 17.086V12.6342H22.7064V17.086H18.1387ZM21.1607 15.5955V14.1076H19.6662V15.5955H21.1607Z", fill: "#E8407C" }), jsxRuntimeExports.jsx("path", { d: "M25.8525 12.6216H30.4147V17.0842H25.8525V12.6216ZM27.3909 14.1049V15.5775H28.9074V14.1049H27.3909Z", fill: "#E8407C" }), jsxRuntimeExports.jsx("path", { d: "M18.1416 20.1494H22.7046V24.6137H18.1416V20.1494ZM21.18 21.6694H19.6608V23.1241H21.18V21.6694Z", fill: "#E8407C" }), jsxRuntimeExports.jsx("path", { d: "M27.4078 20.963L27.3465 23.1885L27.3611 23.176H25.0617V24.6155H23.5352V21.6408H25.8071L25.8446 20.8781L27.4114 20.9676L27.4078 20.963Z", fill: "#E8407C" }), jsxRuntimeExports.jsx("path", { d: "M25.0296 17.8909V20.8415H23.5177V19.3788H22.0059V17.8909H25.0296Z", fill: "#E8407C" }), jsxRuntimeExports.jsx("path", { d: "M23.5322 17.0851V14.1219H25.0304V17.0851H23.5322Z", fill: "#E8407C" }), jsxRuntimeExports.jsx("path", { d: "M28.969 23.1895V20.9299H30.4241V23.1116L28.959 23.1814L28.969 23.1895Z", fill: "#E8407C" }), jsxRuntimeExports.jsx("path", { d: "M27.3659 19.3918H25.8613V17.8978H27.3522V19.4045L27.3659 19.3918Z", fill: "#E8407C" }), jsxRuntimeExports.jsx("path", { d: "M27.3486 19.4045L28.9603 19.4126L28.9494 19.4001L28.8815 20.8682C28.496 20.8682 28.1315 20.8601 27.7661 20.8682C27.6428 20.8847 27.5219 20.9148 27.4054 20.9577V20.962C27.3902 20.4375 27.3746 19.9123 27.3587 19.3866L27.3486 19.4045Z", fill: "#E8407C" }), jsxRuntimeExports.jsx("path", { d: "M19.6058 19.351H18.1406V17.8909H19.6058V19.351Z", fill: "#E8407C" }), jsxRuntimeExports.jsx("path", { d: "M28.9614 19.4125V17.8871H30.4193V19.3992H28.9541L28.9614 19.4125Z", fill: "#E8407C" }), jsxRuntimeExports.jsx("path", { d: "M27.3457 23.1884H28.9684L28.9583 23.1803C28.9336 23.6524 28.907 24.1246 28.8786 24.6182H27.3603C27.3603 24.1238 27.3603 23.649 27.3603 23.1742L27.3457 23.1884Z", fill: "#E8407C" })] });
};
OpenQRIcon.propTypes = {
    /**
     * How height should the icon be?
     */
    height: PropTypes.number,
    /**
     * How width should the icon be?
     */
    width: PropTypes.number,
    /**
     * Alternate white and dark mode
     */
    color: PropTypes.string,
};

const PasswordIcon = ({ height = 100, width = 100, color = '#000000' }) => {
    return jsxRuntimeExports.jsx("svg", { width: width, height: height, viewBox: '0 0 20 20', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: jsxRuntimeExports.jsx("path", { "fill-rule": 'evenodd', "clip-rule": 'evenodd', d: 'M9.99956 9.99964C10.319 9.99302 10.6332 10.0817 10.902 10.2543C11.1708 10.427 11.3822 10.6758 11.509 10.969C11.6359 11.2623 11.6725 11.5867 11.6143 11.9008C11.556 12.215 11.4055 12.5046 11.182 12.7329C10.9585 12.9612 10.672 13.1177 10.3591 13.1825C10.0463 13.2473 9.72119 13.2175 9.42536 13.0968C9.12953 12.9761 8.87635 12.77 8.6981 12.5049C8.51986 12.2397 8.42463 11.9275 8.42456 11.608C8.42144 11.1862 8.58532 10.7804 8.88041 10.479C9.1755 10.1777 9.57784 10.0054 9.99956 9.99964ZM9.99956 5.17464C9.57784 5.18035 9.1755 5.35269 8.88041 5.65403C8.58532 5.95537 8.42144 6.36122 8.42456 6.78297H11.5746C11.5775 6.36136 11.4135 5.95572 11.1184 5.65457C10.8233 5.35341 10.4211 5.18035 9.99956 5.17464ZM13.9379 16.4321H6.0604C5.63882 16.4264 5.23661 16.2542 4.94154 15.953C4.64647 15.6519 4.4825 15.2462 4.4854 14.8246V8.39214C4.48227 7.97039 4.64615 7.56453 4.94124 7.2632C5.23634 6.96186 5.63867 6.78952 6.0604 6.78381H6.8479C6.84166 5.94002 7.16964 5.12806 7.76019 4.52534C8.35073 3.92261 9.15582 3.57813 9.99956 3.56714C10.8434 3.57791 11.6488 3.9223 12.2395 4.52505C12.8302 5.12779 13.1583 5.93988 13.1521 6.78381H13.9396C14.3613 6.78952 14.7636 6.96186 15.0587 7.2632C15.3538 7.56453 15.5177 7.97039 15.5146 8.39214V14.8246C15.5177 15.2467 15.3536 15.6528 15.0581 15.9542C14.7627 16.2555 14.3599 16.4277 13.9379 16.433V16.4321Z', fill: color }) });
};
PasswordIcon.propTypes = {
    /**
     * How height should the icon be?
     */
    height: PropTypes.number,
    /**
     * How width should the icon be?
     */
    width: PropTypes.number,
    /**
     * Alternate white and dark mode
     */
    color: PropTypes.string,
};

const UserCompactIcon = ({ height = 100, width = 100, color = '#000000' }) => {
    return jsxRuntimeExports.jsxs("svg", { width: width, height: height, viewBox: '0 0 20 21', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: [jsxRuntimeExports.jsx("path", { d: 'M10.0007 10.8542C11.8242 10.8542 13.3024 9.37599 13.3024 7.55248C13.3024 5.72898 11.8242 4.25073 10.0007 4.25073C8.17716 4.25073 6.69892 5.72898 6.69892 7.55248C6.69892 9.37599 8.17716 10.8542 10.0007 10.8542Z', fill: color }), jsxRuntimeExports.jsx("path", { d: 'M4.30389 13.6667C5.62016 12.3488 6.93651 12.0583 8.55748 11.9942C9.52642 11.9559 10.506 11.9558 11.475 11.9945C13.0914 12.0592 14.4042 12.3509 15.7231 13.6667C16.2611 14.293 16.5642 14.8798 16.6563 15.6889C16.7359 16.3879 16.371 16.6271 15.9446 16.6271H4.07685C3.64949 16.6271 3.2684 16.3299 3.3435 15.6889C3.43825 14.8801 3.76477 14.292 4.30389 13.6667Z', fill: color })] });
};
UserCompactIcon.propTypes = {
    /**
     * How height should the icon be?
     */
    height: PropTypes.number,
    /**
     * How width should the icon be?
     */
    width: PropTypes.number,
    /**
     * Alternate white and dark mode
     */
    color: PropTypes.string,
};

const QrIcon = ({ height = 100, width = 100, color = '#000000' }) => {
    return jsxRuntimeExports.jsx("svg", { width: width, height: height, viewBox: '0 0 16 16', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: jsxRuntimeExports.jsx("path", { d: 'M7.3125 2.02588H2.5C2.22344 2.02588 2 2.24932 2 2.52588V7.33838C2 7.40713 2.05625 7.46338 2.125 7.46338H7.3125C7.38125 7.46338 7.4375 7.40713 7.4375 7.33838V2.15088C7.4375 2.08213 7.38125 2.02588 7.3125 2.02588ZM6.4375 6.46338H3V3.02588H6.4375V6.46338ZM4.28125 5.30713H5.15625C5.225 5.30713 5.28125 5.25088 5.28125 5.18213V4.30713C5.28125 4.23838 5.225 4.18213 5.15625 4.18213H4.28125C4.2125 4.18213 4.15625 4.23838 4.15625 4.30713V5.18213C4.15625 5.25088 4.2125 5.30713 4.28125 5.30713ZM7.3125 8.58838H2.125C2.05625 8.58838 2 8.64463 2 8.71338V13.5259C2 13.8024 2.22344 14.0259 2.5 14.0259H7.3125C7.38125 14.0259 7.4375 13.9696 7.4375 13.9009V8.71338C7.4375 8.64463 7.38125 8.58838 7.3125 8.58838ZM6.4375 13.0259H3V9.58838H6.4375V13.0259ZM4.28125 11.8696H5.15625C5.225 11.8696 5.28125 11.8134 5.28125 11.7446V10.8696C5.28125 10.8009 5.225 10.7446 5.15625 10.7446H4.28125C4.2125 10.7446 4.15625 10.8009 4.15625 10.8696V11.7446C4.15625 11.8134 4.2125 11.8696 4.28125 11.8696ZM13.5 2.02588H8.6875C8.61875 2.02588 8.5625 2.08213 8.5625 2.15088V7.33838C8.5625 7.40713 8.61875 7.46338 8.6875 7.46338H13.875C13.9438 7.46338 14 7.40713 14 7.33838V2.52588C14 2.24932 13.7766 2.02588 13.5 2.02588ZM13 6.46338H9.5625V3.02588H13V6.46338ZM10.8438 5.30713H11.7188C11.7875 5.30713 11.8438 5.25088 11.8438 5.18213V4.30713C11.8438 4.23838 11.7875 4.18213 11.7188 4.18213H10.8438C10.775 4.18213 10.7188 4.23838 10.7188 4.30713V5.18213C10.7188 5.25088 10.775 5.30713 10.8438 5.30713ZM13.875 8.58838H13.125C13.0562 8.58838 13 8.64463 13 8.71338V10.8071H11.7812V8.71338C11.7812 8.64463 11.725 8.58838 11.6562 8.58838H8.6875C8.61875 8.58838 8.5625 8.64463 8.5625 8.71338V13.9009C8.5625 13.9696 8.61875 14.0259 8.6875 14.0259H9.4375C9.50625 14.0259 9.5625 13.9696 9.5625 13.9009V10.0884H10.7812V11.6821C10.7812 11.7509 10.8375 11.8071 10.9062 11.8071H13.875C13.9438 11.8071 14 11.7509 14 11.6821V8.71338C14 8.64463 13.9438 8.58838 13.875 8.58838ZM11.6562 13.0259H10.9062C10.8375 13.0259 10.7812 13.0821 10.7812 13.1509V13.9009C10.7812 13.9696 10.8375 14.0259 10.9062 14.0259H11.6562C11.725 14.0259 11.7812 13.9696 11.7812 13.9009V13.1509C11.7812 13.0821 11.725 13.0259 11.6562 13.0259ZM13.875 13.0259H13.125C13.0562 13.0259 13 13.0821 13 13.1509V13.9009C13 13.9696 13.0562 14.0259 13.125 14.0259H13.875C13.9438 14.0259 14 13.9696 14 13.9009V13.1509C14 13.0821 13.9438 13.0259 13.875 13.0259Z', fill: color }) });
};
QrIcon.propTypes = {
    /**
     * How height should the icon be?
     */
    height: PropTypes.number,
    /**
     * How width should the icon be?
     */
    width: PropTypes.number,
    /**
     * Alternate white and dark mode
     */
    color: PropTypes.string,
};

const WorldIcon = ({ height = 100, width = 100, color = '#000000' }) => {
    return (jsxRuntimeExports.jsx("svg", { xmlns: 'http://www.w3.org/2000/svg', width: width, height: height, viewBox: '0 0 24 24', fill: 'none', children: jsxRuntimeExports.jsx("path", { 
            // eslint-disable-next-line max-len
            d: 'M20.025 18.7712C20.0297 18.7642 20.0367 18.7572 20.0414 18.7501C21.5766 16.9243 22.5 14.5712 22.5 12.0001C22.5 9.42903 21.5766 7.0759 20.0438 5.25012C20.0391 5.24309 20.032 5.2384 20.0273 5.23137C20.0016 5.2009 19.9781 5.17278 19.9523 5.14465C19.943 5.13293 19.9336 5.12356 19.9242 5.11184L19.8281 5.00168L19.8258 4.99934C19.7906 4.9595 19.7531 4.91965 19.718 4.87981L19.7156 4.87747C19.6406 4.79778 19.5656 4.71809 19.4883 4.64075L19.4859 4.6384L19.3734 4.5259L19.3664 4.51887C19.3312 4.48372 19.2961 4.4509 19.2609 4.41809C19.2492 4.40637 19.2375 4.39465 19.2234 4.38293C19.2 4.3595 19.1766 4.3384 19.1531 4.31731C19.1461 4.31028 19.1367 4.30325 19.1297 4.29387C17.2594 2.5595 14.7539 1.50012 12 1.50012C9.24609 1.50012 6.74062 2.5595 4.86797 4.29387C4.86094 4.3009 4.85156 4.30793 4.84453 4.31731C4.82109 4.3384 4.79766 4.36184 4.77422 4.38528C4.7625 4.397 4.75078 4.40872 4.73672 4.42043C4.70156 4.45325 4.66641 4.4884 4.63125 4.52122L4.62422 4.52825L4.51172 4.64075L4.50937 4.64309C4.43203 4.72043 4.35703 4.80012 4.28203 4.87981L4.27969 4.88215C4.24219 4.922 4.20703 4.96184 4.17188 5.00168L4.16953 5.00403C4.13672 5.03918 4.10391 5.07668 4.07344 5.11418C4.06406 5.1259 4.05469 5.13528 4.04531 5.147C4.01953 5.17512 3.99609 5.20559 3.97031 5.23372C3.96562 5.24075 3.95859 5.24543 3.95391 5.25247C2.42344 7.0759 1.5 9.42903 1.5 12.0001C1.5 14.5712 2.42344 16.9243 3.95625 18.7501C3.96094 18.7572 3.96797 18.7642 3.97266 18.7712L4.04531 18.8579C4.05469 18.8697 4.06406 18.879 4.07344 18.8907L4.16953 19.0009C4.16953 19.0032 4.17188 19.0032 4.17188 19.0056C4.20703 19.0454 4.24219 19.0853 4.27969 19.1228L4.28203 19.1251C4.35703 19.2048 4.43203 19.2845 4.50703 19.3618L4.50937 19.3642C4.54687 19.4017 4.58203 19.4392 4.61953 19.4743L4.62656 19.4814C4.70391 19.5587 4.78359 19.6337 4.86328 19.7064C6.74062 21.4407 9.24609 22.5001 12 22.5001C14.7539 22.5001 17.2594 21.4407 19.132 19.7064C19.2119 19.6332 19.29 19.5582 19.3664 19.4814L19.3734 19.4743C19.4109 19.4368 19.4484 19.4017 19.4836 19.3642L19.4859 19.3618C19.5633 19.2845 19.6383 19.2048 19.7109 19.1251L19.7133 19.1228C19.7484 19.0829 19.7859 19.0454 19.8211 19.0056C19.8211 19.0032 19.8234 19.0032 19.8234 19.0009C19.8562 18.9657 19.8891 18.9282 19.9195 18.8907C19.9289 18.879 19.9383 18.8697 19.9477 18.8579C19.9742 18.8297 19.9999 18.8008 20.025 18.7712ZM20.1211 15.429C19.7977 16.1931 19.3711 16.9009 18.8508 17.5431C18.2648 17.0367 17.6241 16.5972 16.9406 16.2329C17.2125 15.1337 17.3813 13.9267 17.4258 12.6564H20.7891C20.7188 13.615 20.4937 14.5454 20.1211 15.429ZM20.7891 11.3439H17.4258C17.3813 10.0736 17.2125 8.86653 16.9406 7.76731C17.6273 7.40168 18.2672 6.96106 18.8508 6.45715C19.9818 7.84928 20.6584 9.55497 20.7891 11.3439ZM15.4289 3.87903C16.3594 4.27278 17.2055 4.81653 17.9508 5.5009C17.5178 5.86956 17.0518 6.19751 16.5586 6.48059C16.1906 5.4259 15.7195 4.5095 15.1711 3.7759C15.2578 3.80872 15.3445 3.84387 15.4289 3.87903ZM13.3055 20.2993C13.0898 20.4681 12.8742 20.597 12.6562 20.6837V16.3361C13.5862 16.4009 14.5008 16.608 15.368 16.9501C15.1734 17.5267 14.9484 18.0587 14.6883 18.5392C14.2805 19.2986 13.8023 19.9056 13.3055 20.2993ZM14.6883 5.46106C14.9461 5.94387 15.1734 6.4759 15.368 7.05012C14.5008 7.39221 13.5862 7.5993 12.6562 7.66418V3.31887C12.8719 3.40559 13.0898 3.53215 13.3055 3.70325C13.8023 4.09465 14.2805 4.70168 14.6883 5.46106ZM12.6562 15.0212V12.6564H16.1133C16.0758 13.6923 15.9469 14.6978 15.7313 15.6517L15.7242 15.6798C14.7406 15.3068 13.7063 15.0848 12.6562 15.0212ZM12.6562 11.3439V8.97903C13.7297 8.9134 14.7609 8.68606 15.7242 8.32043L15.7313 8.34856C15.9469 9.30247 16.0758 10.3056 16.1133 11.3439H12.6562ZM11.3438 12.6564V15.0212C10.2703 15.0868 9.23906 15.3142 8.27578 15.6798L8.26875 15.6517C8.05312 14.6978 7.92422 13.6947 7.88672 12.6564H11.3438ZM7.88672 11.3439C7.92422 10.3079 8.05312 9.30247 8.26875 8.34856L8.27578 8.32043C9.23906 8.68606 10.268 8.9134 11.3438 8.97903V11.3439H7.88672ZM11.3438 16.3361V20.6814C11.1281 20.5947 10.9102 20.4681 10.6945 20.297C10.1977 19.9056 9.71719 19.2962 9.30938 18.5368C9.05156 18.054 8.82422 17.522 8.62969 16.9478C9.50156 16.6056 10.4086 16.4017 11.3438 16.3361ZM11.3438 7.66418C10.4138 7.5993 9.49924 7.39221 8.63203 7.05012C8.82656 6.47356 9.05156 5.94153 9.31172 5.46106C9.71953 4.70168 10.1977 4.09231 10.6969 3.7009C10.9125 3.53215 11.1281 3.40325 11.3461 3.31653V7.66418H11.3438ZM8.57109 3.87903C8.65781 3.84387 8.74219 3.80872 8.82891 3.7759C8.28047 4.5095 7.80937 5.4259 7.44141 6.48059C6.94922 6.19934 6.48281 5.87122 6.04922 5.5009C6.79453 4.81653 7.64063 4.27278 8.57109 3.87903ZM3.87891 8.57122C4.20234 7.80715 4.62891 7.09934 5.14922 6.45715C5.73281 6.96106 6.37266 7.40168 7.05938 7.76731C6.7875 8.86653 6.61875 10.0736 6.57422 11.3439H3.21094C3.28125 10.3853 3.50625 9.45481 3.87891 8.57122ZM3.21094 12.6564H6.57422C6.61875 13.9267 6.7875 15.1337 7.05938 16.2329C6.37589 16.5972 5.73521 17.0367 5.14922 17.5431C4.01819 16.151 3.34164 14.4453 3.21094 12.6564ZM8.57109 20.1212C7.64063 19.7275 6.79453 19.1837 6.04922 18.4993C6.48281 18.129 6.94922 17.8032 7.44141 17.5197C7.80937 18.5743 8.28047 19.4907 8.82891 20.2243C8.74219 20.1915 8.65547 20.1564 8.57109 20.1212ZM15.4289 20.1212C15.3422 20.1564 15.2578 20.1915 15.1711 20.2243C15.7195 19.4907 16.1906 18.5743 16.5586 17.5197C17.0508 17.8009 17.5172 18.129 17.9508 18.4993C17.2096 19.1809 16.3565 19.7295 15.4289 20.1212Z', fill: color }) }));
};
WorldIcon.propTypes = {
    /**
     * How height should the icon be?
     */
    height: PropTypes.number,
    /**
     * How width should the icon be?
     */
    width: PropTypes.number,
    /**
     * Alternate white and dark mode
     */
    color: PropTypes.string,
};

const ArrowIcon = ({ height = 100, width = 100, color = '#000000', direction }) => {
    let transformationStyle = '';
    switch (direction) {
        case 'right':
            transformationStyle = 'rotate(180deg)';
            break;
        case 'up':
            transformationStyle = 'rotate(90deg)';
            break;
        case 'down':
            transformationStyle = 'rotate(270deg)';
            break;
    }
    return (jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: width, height: height, viewBox: "0 0 24 24", fill: "none", style: { transform: transformationStyle }, children: jsxRuntimeExports.jsx("path", { d: "M20.4366 11.1095H6.72331L14.9311 3.9845C15.0624 3.86965 14.9827 3.65637 14.8092 3.65637H12.735C12.6436 3.65637 12.5569 3.68918 12.4889 3.74778L3.6319 11.4329C3.55078 11.5033 3.48573 11.5902 3.44114 11.6878C3.39655 11.7855 3.37347 11.8916 3.37347 11.999C3.37347 12.1063 3.39655 12.2124 3.44114 12.3101C3.48573 12.4077 3.55078 12.4946 3.6319 12.565L12.5405 20.297C12.5757 20.3275 12.6178 20.3439 12.6624 20.3439H14.8069C14.9803 20.3439 15.06 20.1282 14.9288 20.0157L6.72331 12.8907H20.4366C20.5397 12.8907 20.6241 12.8064 20.6241 12.7032V11.297C20.6241 11.1939 20.5397 11.1095 20.4366 11.1095Z", fill: color }) }));
};
ArrowIcon.propTypes = {
    /**
     * How height should the icon be?
     */
    height: PropTypes.number,
    /**
     * How width should the icon be?
     */
    width: PropTypes.number,
    /**
     * Alternate white and dark mode
     */
    color: PropTypes.string,
    /**
      * Alternate direction of arrow
      */
    direction: PropTypes.oneOf(['left', 'right', 'up', 'down']),
};

const CartIcon = ({ height = 100, width = 100, color = '#000000' }) => {
    return (jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: width, height: height, viewBox: "0 0 24 24", fill: "none", children: jsxRuntimeExports.jsx("path", { d: "M18.5259 13.709H6.89502L7.479 12.5195L17.1821 12.502C17.5103 12.502 17.7915 12.2676 17.8501 11.9434L19.1938 4.42187C19.229 4.22461 19.1763 4.02148 19.0474 3.86719C18.9837 3.79125 18.9042 3.73008 18.8145 3.68792C18.7248 3.64577 18.627 3.62363 18.5278 3.62305L6.18408 3.58203L6.07861 3.08594C6.01221 2.76953 5.72705 2.53906 5.40283 2.53906H2.38525C2.2024 2.53906 2.02703 2.6117 1.89774 2.741C1.76844 2.8703 1.6958 3.04566 1.6958 3.22852C1.6958 3.41137 1.76844 3.58674 1.89774 3.71603C2.02703 3.84533 2.2024 3.91797 2.38525 3.91797H4.84424L5.30518 6.10937L6.43994 11.6035L4.979 13.9883C4.90314 14.0907 4.85744 14.2123 4.84708 14.3393C4.83673 14.4663 4.86213 14.5937 4.92041 14.707C5.0376 14.9395 5.27393 15.0859 5.53564 15.0859H6.76221C6.50072 15.4332 6.35948 15.8563 6.35986 16.291C6.35986 17.3965 7.2583 18.2949 8.36377 18.2949C9.46924 18.2949 10.3677 17.3965 10.3677 16.291C10.3677 15.8555 10.2231 15.4316 9.96533 15.0859H13.1118C12.8503 15.4332 12.7091 15.8563 12.7095 16.291C12.7095 17.3965 13.6079 18.2949 14.7134 18.2949C15.8188 18.2949 16.7173 17.3965 16.7173 16.291C16.7173 15.8555 16.5728 15.4316 16.3149 15.0859H18.5278C18.9067 15.0859 19.2173 14.7773 19.2173 14.3965C19.2161 14.2138 19.1428 14.039 19.0133 13.9102C18.8838 13.7814 18.7085 13.7091 18.5259 13.709ZM6.47119 4.94141L17.7173 4.97852L16.6157 11.1465L7.78174 11.1621L6.47119 4.94141ZM8.36377 16.9082C8.02393 16.9082 7.74658 16.6309 7.74658 16.291C7.74658 15.9512 8.02393 15.6738 8.36377 15.6738C8.70361 15.6738 8.98096 15.9512 8.98096 16.291C8.98096 16.4547 8.91593 16.6117 8.80019 16.7274C8.68444 16.8432 8.52746 16.9082 8.36377 16.9082ZM14.7134 16.9082C14.3735 16.9082 14.0962 16.6309 14.0962 16.291C14.0962 15.9512 14.3735 15.6738 14.7134 15.6738C15.0532 15.6738 15.3306 15.9512 15.3306 16.291C15.3306 16.4547 15.2655 16.6117 15.1498 16.7274C15.034 16.8432 14.8771 16.9082 14.7134 16.9082Z", fill: color }) }));
};
CartIcon.propTypes = {
    /**
     * How height should the icon be?
     */
    height: PropTypes.number,
    /**
       * How width should the icon be?
       */
    width: PropTypes.number,
    /**
     * Alternate white and dark mode
     */
    color: PropTypes.string,
};

const HomeIcon = ({ height = 100, width = 100, color = '#000000' }) => {
    return (jsxRuntimeExports.jsx("svg", { width: width, height: height, fill: color, viewBox: "0 0 21 20", xmlns: "http://www.w3.org/2000/svg", children: jsxRuntimeExports.jsxs("g", { id: "Icon / Two Tone / Home", children: [jsxRuntimeExports.jsx("path", { id: "Vector", opacity: "0.1", d: "M10.4897 3.37146L3.26318 10.5922H5.13818V16.9535H8.14404V12.5004C8.14404 12.0687 8.49365 11.7191 8.92529 11.7191H12.0503C12.4819 11.7191 12.8315 12.0687 12.8315 12.5004V16.9535H15.8374V10.5922H17.7144L10.9409 3.82263L10.4897 3.37146ZM18.9761 11.6312C18.8589 11.7484 18.7202 11.8422 18.5698 11.9027C18.7202 11.8402 18.8589 11.7484 18.9761 11.6312ZM1.65186 10.9535C1.74951 11.5453 2.26514 11.9984 2.88428 11.9984H2.90186C2.27881 11.9984 1.75146 11.5492 1.65186 10.9535ZM1.63428 10.7484V10.7113V10.7484ZM1.63623 10.6976C1.63818 10.6371 1.646 10.5785 1.65576 10.5199C1.64404 10.5765 1.63818 10.6371 1.63623 10.6976Z" }), jsxRuntimeExports.jsx("path", { id: "Vector_2", d: "M19.0625 9.9605C19.0625 9.95854 19.0605 9.95854 19.0605 9.95659L19.0254 9.91558C19.0234 9.91362 19.0215 9.90972 19.0176 9.90776C19.0039 9.89214 18.9883 9.87651 18.9746 9.86089L11.4277 2.31987L10.9219 1.81401C10.8066 1.69952 10.6507 1.63525 10.4883 1.63525C10.3258 1.63525 10.1699 1.69952 10.0547 1.81401L2.00195 9.86284C1.85648 10.0076 1.74911 10.186 1.68945 10.3824L1.67773 10.4234L1.67187 10.4449L1.66602 10.4683C1.66211 10.482 1.66016 10.4957 1.6582 10.5093C1.6582 10.5113 1.6582 10.5152 1.65625 10.5171C1.64453 10.5757 1.63867 10.6343 1.63672 10.6949V10.7593C1.63672 10.7691 1.63672 10.7789 1.63867 10.7886C1.63867 10.7984 1.63867 10.8062 1.64063 10.816C1.64063 10.8257 1.64258 10.8355 1.64258 10.8453C1.64258 10.857 1.64453 10.8687 1.64648 10.8804C1.64648 10.8863 1.64844 10.8921 1.64844 10.898L1.6543 10.9468V10.9488C1.75391 11.5445 2.2832 11.9937 2.9043 11.9937H3.73438V18.3589H17.2441V11.9976H18.0918C18.2598 11.9976 18.4219 11.9644 18.5703 11.9019C18.7188 11.8394 18.8574 11.7476 18.9766 11.6304C19.0929 11.5144 19.1851 11.3765 19.2478 11.2246C19.3105 11.0728 19.3425 10.91 19.3418 10.7457C19.3418 10.4585 19.2441 10.1832 19.0625 9.9605ZM11.582 16.9527H9.39453V12.9683H11.582V16.9527ZM15.8379 10.5914V16.9527H12.832V12.4996C12.832 12.0679 12.4824 11.7183 12.0508 11.7183H8.92578C8.49414 11.7183 8.14453 12.0679 8.14453 12.4996V16.9527H5.13867V10.5914H3.26367L10.4902 3.37065L10.9414 3.82183L17.7148 10.5914H15.8379Z" })] }) }));
};
HomeIcon.propTypes = {
    /**
     * How height should the icon be?
     */
    height: PropTypes.number,
    /**
       * How width should the icon be?
       */
    width: PropTypes.number,
    /**
     * Alternate white and dark mode
     */
    color: PropTypes.string,
};

const InfoCircleIcon = ({ height = 100, width = 100, color = '#000000', outline = false }) => {
    return outline ?
        (jsxRuntimeExports.jsxs("svg", { width: width, height: height, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsxRuntimeExports.jsx("path", { d: "M12 1.50012C6.20156 1.50012 1.5 6.20168 1.5 12.0001C1.5 17.7986 6.20156 22.5001 12 22.5001C17.7984 22.5001 22.5 17.7986 22.5 12.0001C22.5 6.20168 17.7984 1.50012 12 1.50012ZM12 20.7189C7.18594 20.7189 3.28125 16.8142 3.28125 12.0001C3.28125 7.18606 7.18594 3.28137 12 3.28137C16.8141 3.28137 20.7188 7.18606 20.7188 12.0001C20.7188 16.8142 16.8141 20.7189 12 20.7189Z", fill: color }), jsxRuntimeExports.jsx("path", { d: "M10.875 7.87512C10.875 8.17349 10.9935 8.45964 11.2045 8.67062C11.4155 8.8816 11.7016 9.00012 12 9.00012C12.2984 9.00012 12.5845 8.8816 12.7955 8.67062C13.0065 8.45964 13.125 8.17349 13.125 7.87512C13.125 7.57675 13.0065 7.29061 12.7955 7.07963C12.5845 6.86865 12.2984 6.75012 12 6.75012C11.7016 6.75012 11.4155 6.86865 11.2045 7.07963C10.9935 7.29061 10.875 7.57675 10.875 7.87512ZM12.8125 10.5001H11.1875C11.0844 10.5001 11 10.5845 11 10.6876V17.0626C11 17.1657 11.0844 17.2501 11.1875 17.2501H12.8125C12.9156 17.2501 13 17.1657 13 17.0626V10.6876C13 10.5845 12.9156 10.5001 12.8125 10.5001Z", fill: color })] }))
        :
            (jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: width, height: height, viewBox: "0 0 24 24", fill: "none", children: jsxRuntimeExports.jsx("path", { d: "M12 1.50012C6.20156 1.50012 1.5 6.20168 1.5 12.0001C1.5 17.7986 6.20156 22.5001 12 22.5001C17.7984 22.5001 22.5 17.7986 22.5 12.0001C22.5 6.20168 17.7984 1.50012 12 1.50012ZM12.75 17.0626C12.75 17.1657 12.6656 17.2501 12.5625 17.2501H11.4375C11.3344 17.2501 11.25 17.1657 11.25 17.0626V10.6876C11.25 10.5845 11.3344 10.5001 11.4375 10.5001H12.5625C12.6656 10.5001 12.75 10.5845 12.75 10.6876V17.0626ZM12 9.00012C11.7056 8.99411 11.4253 8.87295 11.2192 8.66262C11.0132 8.4523 10.8977 8.16958 10.8977 7.87512C10.8977 7.58067 11.0132 7.29795 11.2192 7.08762C11.4253 6.8773 11.7056 6.75613 12 6.75012C12.2944 6.75613 12.5747 6.8773 12.7808 7.08762C12.9868 7.29795 13.1023 7.58067 13.1023 7.87512C13.1023 8.16958 12.9868 8.4523 12.7808 8.66262C12.5747 8.87295 12.2944 8.99411 12 9.00012Z", fill: color }) }));
};
InfoCircleIcon.propTypes = {
    /**
     * How height should the icon be?
     */
    height: PropTypes.number,
    /**
       * How width should the icon be?
       */
    width: PropTypes.number,
    /**
     * Alternate white and dark mode
     */
    color: PropTypes.string,
    /**
     * Alternate white and dark mode
     */
    outline: PropTypes.bool,
};

const LockIcon = ({ height = 100, width = 100, color = '#000000' }) => {
    return (jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: width, height: height, viewBox: "0 0 19 18", fill: "none", children: jsxRuntimeExports.jsx("path", { d: "M14.625 8.15625H13.4297V4.21875C13.4297 2.97598 12.4225 1.96875 11.1797 1.96875H6.82031C5.57754 1.96875 4.57031 2.97598 4.57031 4.21875V8.15625H3.375C3.06387 8.15625 2.8125 8.40762 2.8125 8.71875V15.4688C2.8125 15.7799 3.06387 16.0312 3.375 16.0312H14.625C14.9361 16.0312 15.1875 15.7799 15.1875 15.4688V8.71875C15.1875 8.40762 14.9361 8.15625 14.625 8.15625ZM9.49219 12.3223V13.2539C9.49219 13.3313 9.42891 13.3945 9.35156 13.3945H8.64844C8.57109 13.3945 8.50781 13.3313 8.50781 13.2539V12.3223C8.36271 12.2181 8.25441 12.0706 8.19849 11.9009C8.14257 11.7313 8.14193 11.5482 8.19665 11.3782C8.25137 11.2082 8.35863 11.0599 8.50299 10.9547C8.64735 10.8495 8.82137 10.7928 9 10.7928C9.17863 10.7928 9.35265 10.8495 9.49701 10.9547C9.64137 11.0599 9.74863 11.2082 9.80335 11.3782C9.85807 11.5482 9.85743 11.7313 9.80151 11.9009C9.74559 12.0706 9.63729 12.2181 9.49219 12.3223ZM12.1641 8.15625H5.83594V4.21875C5.83594 3.67559 6.27715 3.23438 6.82031 3.23438H11.1797C11.7229 3.23438 12.1641 3.67559 12.1641 4.21875V8.15625Z", fill: color }) }));
};
LockIcon.propTypes = {
    /**
     * How height should the icon be?
     */
    height: PropTypes.number,
    /**
       * How width should the icon be?
       */
    width: PropTypes.number,
    /**
     * Alternate white and dark mode
     */
    color: PropTypes.string,
};

const MasterCardIcon = ({ height = 100, width = 100 }) => {
    return (jsxRuntimeExports.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: width, height: height, viewBox: "0 0 60 43", fill: "none", children: [jsxRuntimeExports.jsxs("g", { "clip-path": "url(#clip0_738_38849)", children: [jsxRuntimeExports.jsx("path", { d: "M54.8571 43H5.14286C2.29714 43 0 40.6952 0 37.84V5.16C0 2.3048 2.29714 0 5.14286 0H54.8571C57.7029 0 60 2.3048 60 5.16V37.84C60 40.6952 57.7029 43 54.8571 43Z", fill: "#F9F9F9" }), jsxRuntimeExports.jsx("path", { d: "M54.8571 1.72C56.7429 1.72 58.2857 3.268 58.2857 5.16V37.84C58.2857 39.732 56.7429 41.28 54.8571 41.28H5.14286C3.25714 41.28 1.71429 39.732 1.71429 37.84V5.16C1.71429 3.268 3.25714 1.72 5.14286 1.72H54.8571ZM54.8571 0H5.14286C2.29714 0 0 2.3048 0 5.16V37.84C0 40.6952 2.29714 43 5.14286 43H54.8571C57.7029 43 60 40.6952 60 37.84V5.16C60 2.3048 57.7029 0 54.8571 0Z", fill: "#E7E7E7" }), jsxRuntimeExports.jsx("path", { d: "M47.2812 21.5028C47.2812 27.4392 42.4897 32.2467 36.5936 32.2467C30.6975 32.2467 25.9062 27.4394 25.9062 21.5028C25.9062 15.5662 30.698 10.7588 36.5935 10.7588C42.4889 10.7588 47.2812 15.5662 47.2812 21.5028Z", fill: "#F79F1A" }), jsxRuntimeExports.jsx("path", { d: "M34.0938 21.5029C34.0938 27.4394 29.3021 32.2469 23.4063 32.2469C17.5105 32.2469 12.7188 27.4395 12.7188 21.5029C12.7188 15.5664 17.5102 10.7588 23.4063 10.7588C29.3024 10.7588 34.0938 15.5664 34.0938 21.5029Z", fill: "#EA001B" }), jsxRuntimeExports.jsx("path", { d: "M29.9897 13.0371C27.4896 15.0019 25.9062 18.0538 25.9062 21.5029C25.9062 24.9521 27.5105 28.0035 29.9897 29.9684C32.4896 28.0035 34.0731 24.9517 34.0731 21.5026C34.0731 18.0535 32.4896 15.0019 29.9897 13.0371Z", fill: "#FF5F01" })] }), jsxRuntimeExports.jsx("defs", { children: jsxRuntimeExports.jsx("clipPath", { id: "clip0_738_38849", children: jsxRuntimeExports.jsx("rect", { width: "60", height: "43", fill: "white" }) }) })] }));
};
MasterCardIcon.propTypes = {
    /**
     * How height should the icon be?
     */
    height: PropTypes.number,
    /**
     * How width should the icon be?
     */
    width: PropTypes.number,
    /**
     * Alternate white and dark mode
     */
    color: PropTypes.string,
};

const VisaCardIcon = ({ height = 100, width = 100 }) => {
    return (jsxRuntimeExports.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: width, height: height, viewBox: "0 0 60 43", fill: "none", children: [jsxRuntimeExports.jsxs("g", { "clip-path": "url(#clip0_738_39323)", children: [jsxRuntimeExports.jsx("path", { d: "M54.8571 44H5.14286C2.29714 44 0 41.6416 0 38.72V5.28C0 2.3584 2.29714 0 5.14286 0H54.8571C57.7029 0 60 2.3584 60 5.28V38.72C60 41.6416 57.7029 44 54.8571 44Z", fill: "#FCFCFC" }), jsxRuntimeExports.jsx("path", { d: "M54.8571 1.76C56.7429 1.76 58.2857 3.344 58.2857 5.28V38.72C58.2857 40.656 56.7429 42.24 54.8571 42.24H5.14286C3.25714 42.24 1.71429 40.656 1.71429 38.72V5.28C1.71429 3.344 3.25714 1.76 5.14286 1.76H54.8571ZM54.8571 0H5.14286C2.29714 0 0 2.3584 0 5.28V38.72C0 41.6416 2.29714 44 5.14286 44H54.8571C57.7029 44 60 41.6416 60 38.72V5.28C60 2.3584 57.7029 0 54.8571 0Z", fill: "#E7E7E7" }), jsxRuntimeExports.jsx("path", { d: "M25.1824 14.4495L22.0281 29.4799H25.8338L28.9881 14.4495H25.1824ZM49.6967 14.4495H46.4567C45.7367 14.4495 45.1024 14.8895 44.8453 15.5407L39.1195 29.4799H43.1138L43.9024 27.2271H48.7881L49.251 29.4799H52.7824L49.6967 14.4495ZM45.0167 24.1471L47.0053 18.5151L48.1538 24.1471H45.0167ZM19.5424 14.4495L15.5824 24.6751L13.971 15.9807C13.7653 14.9951 13.0453 14.4319 12.2053 14.4319H5.75954L5.67383 14.8719C7.01097 15.1711 8.5024 15.6463 9.42811 16.1391C9.97669 16.4735 10.1481 16.7375 10.3195 17.4767L13.3538 29.4975H17.3653L23.5538 14.4671H19.5424V14.4495ZM33.9938 18.6383C33.9938 18.1103 34.5081 17.5119 35.6053 17.3887C36.1538 17.3359 37.6624 17.2655 39.3595 18.0751L40.0281 14.8719C39.1024 14.5375 37.9195 14.2207 36.4795 14.2207C32.7253 14.2207 30.0681 16.2623 30.0338 19.2015C29.9995 21.3663 31.9367 22.5807 33.3595 23.3023C34.8338 24.0415 35.3481 24.5167 35.331 25.1679C35.331 26.1711 34.1481 26.6287 33.051 26.6463C31.1481 26.6815 30.0167 26.1183 29.1424 25.6959L28.4567 28.9871C29.3481 29.4095 30.9938 29.7615 32.7081 29.7967C36.7195 29.7967 39.3253 27.7727 39.3595 24.6575C39.3253 20.6271 33.9595 20.3807 33.9938 18.6383Z", fill: "#0F2496" })] }), jsxRuntimeExports.jsx("defs", { children: jsxRuntimeExports.jsx("clipPath", { id: "clip0_738_39323", children: jsxRuntimeExports.jsx("rect", { width: "60", height: "44", fill: "white" }) }) })] }));
};
VisaCardIcon.propTypes = {
    /**
     * How height should the icon be?
     */
    height: PropTypes.number,
    /**
     * How width should the icon be?
     */
    width: PropTypes.number,
    /**
     * Alternate white and dark mode
     */
    color: PropTypes.string,
};

const PaypalCardIcon = ({ height = 100, width = 100 }) => {
    return (jsxRuntimeExports.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: width, height: height, viewBox: "0 0 60 43", fill: "none", children: [jsxRuntimeExports.jsx("path", { d: "M6.21139 0.75H53.7886C56.7853 0.75 59.25 3.25385 59.25 6.38677V36.6132C59.25 39.7462 56.7853 42.25 53.7886 42.25H6.21139C3.2147 42.25 0.75 39.7462 0.75 36.6132V6.38677C0.75 3.25385 3.2147 0.75 6.21139 0.75Z", fill: "white", stroke: "#E7E7E7", "stroke-width": "1.5" }), jsxRuntimeExports.jsx("path", { d: "M36.5334 16.168C36.5147 16.2884 36.4934 16.412 36.4696 16.5388C35.636 20.8194 32.784 22.2977 29.1411 22.2977H27.2842C27.0687 22.2977 26.8604 22.375 26.697 22.5156C26.5336 22.6561 26.426 22.8506 26.3938 23.0637L25.4452 29.083L25.1778 30.7905C25.168 30.852 25.1704 30.9149 25.1849 30.9755C25.1994 31.0361 25.2258 31.0933 25.2624 31.1437C25.2991 31.1941 25.3453 31.2367 25.3985 31.2692C25.4516 31.3018 25.5107 31.3234 25.5723 31.3331C25.5967 31.3372 25.6215 31.3393 25.6463 31.3395H28.9362C29.1246 31.3395 29.3068 31.2724 29.4502 31.1501C29.5935 31.0279 29.6885 30.8585 29.7181 30.6724L29.7507 30.5052L30.3699 26.5744L30.4094 26.3587C30.4387 26.1723 30.5335 26.0026 30.6769 25.88C30.8203 25.7575 31.0027 25.6902 31.1914 25.6904H31.6835C34.8706 25.6904 37.3645 24.3965 38.0948 20.6515C38.3992 19.087 38.2416 17.7791 37.4354 16.8625C37.1796 16.5779 36.8739 16.3426 36.5334 16.168Z", fill: "#179BD7" }), jsxRuntimeExports.jsx("path", { d: "M35.6602 15.8201C35.394 15.7433 35.1233 15.6832 34.8496 15.6401C34.3087 15.5569 33.7621 15.517 33.2149 15.5207H28.2596C28.0706 15.52 27.8876 15.587 27.7438 15.7096C27.6 15.8323 27.5049 16.0023 27.4758 16.1891L26.4245 22.8658L26.3906 23.0605C26.4229 22.8474 26.5304 22.653 26.6938 22.5124C26.8572 22.3719 27.0656 22.2946 27.2811 22.2946H29.136C32.7789 22.2946 35.6309 20.8149 36.4645 16.5357C36.4894 16.408 36.5105 16.2854 36.5284 16.1648C36.3083 16.0494 36.079 15.9527 35.8428 15.8756C35.7847 15.8584 35.7228 15.8386 35.6602 15.8201Z", fill: "#222D65" }), jsxRuntimeExports.jsx("path", { d: "M27.4792 16.1889C27.508 16.0025 27.6026 15.8326 27.746 15.7101C27.8894 15.5875 28.072 15.5205 28.2605 15.5212H33.2158C33.7632 15.5175 34.3101 15.5574 34.8512 15.6406C35.1896 15.6939 35.5234 15.7735 35.8495 15.8786C36.0856 15.956 36.3149 16.0527 36.535 16.1678C36.7833 14.5861 36.535 13.5092 35.6778 12.5339C34.7337 11.4596 33.032 11 30.8547 11H24.5353C24.3194 10.9998 24.1106 11.0769 23.9466 11.2174C23.7827 11.358 23.6745 11.5526 23.6417 11.766L21.0067 28.4548C20.9955 28.5252 20.9983 28.5971 21.015 28.6664C21.0316 28.7358 21.0617 28.8011 21.1036 28.8588C21.1455 28.9165 21.1984 28.9654 21.2592 29.0026C21.32 29.0398 21.3876 29.0647 21.458 29.0758C21.4858 29.0805 21.514 29.0829 21.5423 29.0829H25.4449L26.4254 22.865L27.4792 16.1889Z", fill: "#253B80" })] }));
};
PaypalCardIcon.propTypes = {
    /**
     * How height should the icon be?
     */
    height: PropTypes.number,
    /**
     * How width should the icon be?
     */
    width: PropTypes.number,
    /**
     * Alternate white and dark mode
     */
    color: PropTypes.string,
};

const DiscoverCardIcon = ({ height = 100, width = 100 }) => {
    return (jsxRuntimeExports.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: width, height: height, viewBox: "0 0 60 43", fill: "none", children: [jsxRuntimeExports.jsxs("g", { "clip-path": "url(#clip0_738_38801)", children: [jsxRuntimeExports.jsx("path", { d: "M1.37109 1.71973H58.4568V41.2797H1.37109V1.71973Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M58.3797 39.2372V25.4043C58.3797 25.4043 42.8981 36.3641 14.543 41.2723H55.2806C57.0214 41.2187 58.0377 40.6499 58.3797 39.2372Z", fill: "#EF7D00" }), jsxRuntimeExports.jsx("path", { d: "M31.6097 14.3535C29.2837 14.3535 27.3965 16.1767 27.3965 18.4268C27.3965 20.819 29.2016 22.6073 31.6097 22.6073C33.9576 22.6073 35.8112 20.7953 35.8112 18.4738C35.8112 16.1659 33.9701 14.3535 31.6097 14.3535Z", fill: "url(#paint0_radial_738_38801)" }), jsxRuntimeExports.jsx("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M5.42578 14.502H7.69087C10.1888 14.502 11.9312 16.1289 11.9313 18.469C11.9313 19.636 11.3975 20.7648 10.4977 21.5137C9.7391 22.1439 8.87458 22.4281 7.67904 22.4281H5.42578V14.502ZM7.38178 21.0865C8.37812 21.0865 9.00521 20.8959 9.49207 20.4552C10.0252 19.9815 10.343 19.2194 10.343 18.4576C10.343 17.6974 10.0252 16.9612 9.49207 16.4856C8.98121 16.0226 8.37812 15.8441 7.38178 15.8441H6.96761V21.0866L7.38178 21.0865Z", fill: "#05171D" }), jsxRuntimeExports.jsx("path", { d: "M12.6427 14.5021H14.182V22.4282H12.6426L12.6427 14.5021ZM17.9507 17.5426C17.0253 17.1986 16.7533 16.9719 16.7533 16.5457C16.7533 16.046 17.2379 15.666 17.9023 15.666C18.3642 15.666 18.7434 15.8559 19.1474 16.3062L19.9518 15.2502C19.2885 14.6666 18.495 14.3699 17.6294 14.3699C16.233 14.3699 15.166 15.3447 15.166 16.6392C15.166 17.7337 15.6631 18.2916 17.1088 18.8161C17.7134 19.0288 18.0208 19.1707 18.1751 19.2679C18.4832 19.4698 18.6376 19.754 18.6376 20.0866C18.6376 20.7294 18.1278 21.2043 17.4398 21.2043C16.7054 21.2043 16.1135 20.8362 15.7581 20.147L14.7642 21.1107C15.4734 22.1553 16.3266 22.6202 17.5003 22.6202C19.0996 22.6202 20.2243 21.549 20.2243 20.0164C20.2243 18.7562 19.7046 18.1853 17.9507 17.5426ZM20.7098 18.4691C20.7098 20.8011 22.5345 22.6073 24.8809 22.6073C25.5443 22.6073 26.1129 22.4757 26.8123 22.1443V20.325C26.1957 20.9433 25.6506 21.1924 24.9513 21.1924C23.3999 21.1924 22.2974 20.0629 22.2974 18.4576C22.2974 16.9371 23.4344 15.7364 24.8809 15.7364C25.6142 15.7364 26.1721 15.9978 26.8123 16.6277V14.8083C26.1371 14.4648 25.5794 14.3232 24.916 14.3232C22.5817 14.3232 20.7098 16.1659 20.7098 18.4691ZM39.2978 19.8266L37.1893 14.5021H35.5067L38.8605 22.631H39.689L43.1015 14.5021H41.4316L39.2978 19.8266ZM43.802 22.4284H48.1729V21.0868H45.3419V18.9457H48.0645V17.6035H45.3419V15.8444H48.1729V14.5021H43.8018V22.4284H43.802Z", fill: "#05171D" }), jsxRuntimeExports.jsx("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M51.4763 14.502C53.2542 14.502 54.2716 15.3563 54.2716 16.8412C54.2716 18.0544 53.6331 18.851 52.4703 19.0895L54.9597 22.4282H53.0641L50.9327 19.2428H50.7311V22.4282H49.1895V14.502H51.4763ZM50.7311 18.1502H51.1794C52.1658 18.1502 52.6868 17.7208 52.6868 16.9251C52.6868 16.1538 52.1656 15.7486 51.2041 15.7486H50.7311V18.1502Z", fill: "#05171D" }), jsxRuntimeExports.jsx("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M55.0973 14.8779C55.2668 14.8779 55.3592 14.9533 55.3592 15.0922C55.3592 15.1894 55.3054 15.2617 55.2078 15.2876L55.4393 15.5762H55.2327L55.038 15.3047V15.5762H54.873V14.8779H55.0973ZM55.038 15.1872H55.0688C55.1506 15.1872 55.194 15.1562 55.1941 15.0948C55.1941 15.0355 55.1525 15.0056 55.0704 15.0056H55.038V15.1872Z", fill: "#1D1D1B" }), jsxRuntimeExports.jsx("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M54.5234 15.2253C54.5232 15.1452 54.5387 15.0658 54.5691 14.9916C54.5996 14.9175 54.6443 14.8502 54.7007 14.7935C54.7572 14.7368 54.8243 14.6919 54.8981 14.6613C54.972 14.6307 55.0511 14.615 55.131 14.6152C55.4613 14.6152 55.731 14.891 55.731 15.2253C55.731 15.5607 55.4613 15.8354 55.131 15.8354C55.0511 15.8355 54.972 15.8198 54.8983 15.7891C54.8245 15.7585 54.7574 15.7136 54.701 15.6569C54.6446 15.6002 54.5998 15.5329 54.5694 15.4589C54.5389 15.3848 54.5233 15.3054 54.5234 15.2253ZM54.6433 15.2269C54.6433 15.5029 54.8605 15.726 55.1301 15.726C55.3924 15.726 55.6086 15.501 55.6088 15.2269C55.6088 14.9524 55.3922 14.7263 55.1303 14.7263C54.8589 14.7263 54.6433 14.9481 54.6433 15.2269Z", fill: "#1D1D1B" }), jsxRuntimeExports.jsx("path", { d: "M19.2363 24.5117L21.2978 26.6784V24.6249H21.5923V27.3958L19.5314 25.2338V27.2771H19.2363V24.5117Z", fill: "#1D1D1B" }), jsxRuntimeExports.jsx("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M19.209 27.305V24.4424C19.209 24.4424 21.1794 26.5136 21.2701 26.6098V24.5968H21.6191V27.4646L19.5585 25.302V27.305H19.209ZM21.3265 26.748C21.3265 26.748 19.3556 24.6754 19.2642 24.5808V27.2493H19.5047V25.1643C19.5047 25.1643 21.4734 27.2322 21.5646 27.3284V24.6515H21.3265V26.748Z", fill: "#1D1D1B" }), jsxRuntimeExports.jsx("path", { d: "M23.0215 24.625H24.391V24.899H23.3151V25.6878H24.3597V25.9616H23.3151V27.0022H24.391V27.2771H23.0215V24.625Z", fill: "#1D1D1B" }), jsxRuntimeExports.jsx("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M22.9922 24.5967H24.4178V24.928H23.3422V25.6602H24.3859V25.9875H23.3422V26.9741H24.4178V27.3046H22.9922V24.5967ZM24.3626 24.8707V24.651H23.0472V27.2489H24.3626V27.0294H23.286V25.9333H24.3307V25.7145H23.2862V24.8707H24.3626Z", fill: "#1D1D1B" }), jsxRuntimeExports.jsx("path", { d: "M26.4693 27.2771H26.1745V24.899H25.5371V24.625H27.1143V24.899H26.4695L26.4693 27.2771Z", fill: "#1D1D1B" }), jsxRuntimeExports.jsx("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M25.5078 24.5969H27.1417V24.9281H26.4963V27.3048H26.1467V24.928H25.508V24.5967L25.5078 24.5969ZM27.087 24.8708V24.6512H25.5649V24.8708H26.2023V27.2489H26.4418V24.8708H27.087Z", fill: "#1D1D1B" }), jsxRuntimeExports.jsx("path", { d: "M29.0842 26.6121L29.94 24.4863L30.7951 26.6121L31.4892 24.6246H31.8094L30.7951 27.4133L29.94 25.277L29.0842 27.4133L28.0723 24.6246H28.391L29.0842 26.6121Z", fill: "#1D1D1B" }), jsxRuntimeExports.jsx("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M29.087 26.5341L29.9163 24.477L29.9412 24.4141C29.9412 24.4141 30.7428 26.407 30.7946 26.5341C30.8393 26.4055 31.471 24.5974 31.471 24.5974H31.849L30.797 27.493C30.797 27.493 29.989 25.4748 29.9412 25.3528C29.8932 25.4748 29.0854 27.493 29.0854 27.493L28.0332 24.5972H28.4103L29.087 26.5341ZM29.9412 24.5625C29.8932 24.6803 29.111 26.6227 29.111 26.6227L29.0839 26.6908L28.3718 24.6516H28.1122C28.1386 24.7221 29.0407 27.2087 29.0861 27.3369C29.1363 27.2108 29.9412 25.2046 29.9412 25.2046C29.9412 25.2046 30.7447 27.2108 30.7947 27.3369C31.1207 26.4421 31.4458 25.547 31.7702 24.6516H31.5098C31.4966 24.6882 30.7978 26.6908 30.7978 26.6908C30.7978 26.6908 29.989 24.6803 29.9412 24.5625ZM34.2396 27.3231C34.9922 27.3231 35.6172 26.7173 35.6172 25.9541C35.6172 25.1946 34.9922 24.5797 34.2396 24.5797C33.4848 24.5797 32.862 25.1946 32.862 25.9541C32.862 26.7173 33.4848 27.3233 34.2396 27.3233V27.3231ZM34.2394 27.0477C33.6394 27.0477 33.1555 26.5484 33.1555 25.9507C33.1555 25.3492 33.6333 24.8527 34.2394 24.8528C34.8454 24.8528 35.3218 25.3492 35.3218 25.9507C35.3218 26.5482 34.8391 27.0477 34.2394 27.0477Z", fill: "#1D1D1B" }), jsxRuntimeExports.jsx("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M34.2395 27.3499C33.4647 27.3499 32.834 26.7233 32.834 25.9537C32.834 25.1794 33.4647 24.5518 34.2395 24.5518C35.014 24.5518 35.6447 25.1796 35.6447 25.9537C35.6447 26.7233 35.0139 27.3499 34.2395 27.3499ZM34.2395 24.6071C33.4943 24.6071 32.8882 25.2105 32.8882 25.9539C32.8882 26.6935 33.4942 27.2948 34.2395 27.2948C34.9835 27.2948 35.5909 26.6935 35.5909 25.9537C35.5909 25.2107 34.9832 24.607 34.2395 24.607V24.6071Z", fill: "#1D1D1B" }), jsxRuntimeExports.jsx("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M34.2388 27.0757C33.6265 27.0757 33.127 26.5731 33.127 25.9506C33.127 25.3304 33.6265 24.8261 34.2388 24.8261C34.8508 24.8261 35.348 25.3304 35.348 25.9506C35.348 26.5731 34.8508 27.0755 34.2388 27.0755V27.0757ZM34.2388 24.8809C33.656 24.8809 33.1828 25.3613 33.1828 25.9506C33.1828 26.5402 33.656 27.0211 34.2388 27.0211C34.8217 27.0211 35.2931 26.5404 35.2931 25.9506C35.2931 25.3615 34.8215 24.8809 34.2388 24.8809ZM36.8934 27.2771H37.1871V26.1123H37.2616L38.0593 27.2772H38.4208L37.58 26.0882C37.9875 26.0533 38.2417 25.7647 38.2417 25.3565C38.2417 24.7593 37.7763 24.625 37.2752 24.625H36.8934V27.2771ZM37.2786 25.8522H37.1871V24.8988H37.2752C37.6288 24.8988 37.948 24.9423 37.948 25.3773C37.948 25.7893 37.6108 25.8522 37.2786 25.8522Z", fill: "#1D1D1B" }), jsxRuntimeExports.jsx("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M36.8652 24.5969H36.8928L37.2748 24.5967C37.9442 24.5967 38.2691 24.8444 38.2691 25.3561C38.2691 25.7642 38.0155 26.0503 37.6257 26.1039C37.6677 26.1653 38.4746 27.3048 38.4746 27.3048H38.4203L38.0369 27.2923C38.0369 27.2923 37.2599 26.1598 37.2599 26.1397H37.2146V27.3048H36.8652V24.5969ZM38.214 25.3561C38.214 24.8755 37.9149 24.6512 37.2746 24.6512C37.2746 24.6512 36.9674 24.6512 36.9198 24.6509V27.2487H37.1587V26.0843H37.1865L37.2825 26.0963C37.2825 26.0963 38.0594 27.2286 38.0594 27.2487H38.368L37.5281 26.0652L37.577 26.0606C37.9644 26.0279 38.214 25.7505 38.214 25.3561Z", fill: "#1D1D1B" }), jsxRuntimeExports.jsx("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M37.1602 24.8711H37.276C37.615 24.8711 37.9765 24.9098 37.9765 25.3776C37.9765 25.8219 37.604 25.8794 37.2793 25.8794H37.1602V24.8711ZM37.9208 25.3776C37.9208 24.961 37.6155 24.9285 37.2762 24.9285H37.2159V25.8236H37.2793C37.597 25.8236 37.9208 25.7708 37.9208 25.3776Z", fill: "#1D1D1B" }), jsxRuntimeExports.jsx("path", { d: "M41.0891 24.625H41.4851L40.2443 25.8606L41.5268 27.2771H41.1201L40.0365 26.0602L39.9628 26.1324V27.2771H39.668V24.625H39.9627V25.7607L41.0889 24.625H41.0891Z", fill: "#1D1D1B" }), jsxRuntimeExports.jsx("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M41.079 24.5967H41.5511C41.5511 24.5967 40.3197 25.823 40.2812 25.8611C40.3175 25.8984 41.5909 27.3048 41.5909 27.3048H41.5274L41.1006 27.2954C41.1006 27.2954 40.0724 26.1395 40.0352 26.0993L40.034 26.1005C40.0165 26.1172 39.9949 26.138 39.992 26.1366V27.3045H39.6426V24.5967H39.992V25.6944C40.077 25.606 41.0788 24.5967 41.0788 24.5967H41.079ZM40.2064 25.8588C40.2064 25.8588 41.3303 24.7403 41.4184 24.651H41.1004C41.085 24.6674 39.9364 25.828 39.9364 25.828V24.651H39.6976V27.2487H39.9362C39.9362 27.1961 39.944 26.1135 39.944 26.1135L40.0384 26.0188L40.0569 26.0411C40.0569 26.0411 41.1208 27.2348 41.1208 27.2487H41.4654C41.3874 27.1619 40.2064 25.8588 40.2064 25.8588Z", fill: "#1D1D1B" }), jsxRuntimeExports.jsx("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M5.14286 0H54.8571C57.7029 0 60 2.3048 60 5.16V37.84C60 40.6952 57.7029 43 54.8571 43H5.14286C2.29714 43 0 40.6952 0 37.84V5.16C0 2.3048 2.29714 0 5.14286 0ZM58.2857 5.16C58.2857 3.268 56.7429 1.72 54.8571 1.72H5.14286C3.25714 1.72 1.71429 3.268 1.71429 5.16V37.84C1.71429 39.732 3.25714 41.28 5.14286 41.28H54.8571C56.7429 41.28 58.2857 39.732 58.2857 37.84V5.16Z", fill: "#E7E7E7" })] }), jsxRuntimeExports.jsxs("defs", { children: [jsxRuntimeExports.jsxs("radialGradient", { id: "paint0_radial_738_38801", cx: "0", cy: "0", r: "1", gradientUnits: "userSpaceOnUse", gradientTransform: "translate(31.604 18.4804) scale(4.16052 4.08097)", children: [jsxRuntimeExports.jsx("stop", { offset: "0.006", "stop-color": "#FFF2E8" }), jsxRuntimeExports.jsx("stop", { offset: "0.096", "stop-color": "#FEEDDF" }), jsxRuntimeExports.jsx("stop", { offset: "0.244", "stop-color": "#FDE1C7" }), jsxRuntimeExports.jsx("stop", { offset: "0.43", "stop-color": "#FACD9F" }), jsxRuntimeExports.jsx("stop", { offset: "0.648", "stop-color": "#F6B168" }), jsxRuntimeExports.jsx("stop", { offset: "0.89", "stop-color": "#F08E22" }), jsxRuntimeExports.jsx("stop", { offset: "1", "stop-color": "#EE7D00" })] }), jsxRuntimeExports.jsx("clipPath", { id: "clip0_738_38801", children: jsxRuntimeExports.jsx("rect", { width: "60", height: "43", fill: "white" }) })] })] }));
};
DiscoverCardIcon.propTypes = {
    /**
     * How height should the icon be?
     */
    height: PropTypes.number,
    /**
     * How width should the icon be?
     */
    width: PropTypes.number,
    /**
     * Alternate white and dark mode
     */
    color: PropTypes.string,
};

const AmexCardIcon = ({ height = 100, width = 100 }) => {
    return (jsxRuntimeExports.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: width, height: height, viewBox: "0 0 60 43", fill: "none", children: [jsxRuntimeExports.jsx("g", { "clip-path": "url(#clip0_738_38831)", children: jsxRuntimeExports.jsxs("g", { "clip-path": "url(#clip1_738_38831)", children: [jsxRuntimeExports.jsx("path", { d: "M54.8571 44H5.14286C2.29714 44 0 41.6416 0 38.72V5.28C0 2.3584 2.29714 0 5.14286 0H54.8571C57.7029 0 60 2.3584 60 5.28V38.72C60 41.6416 57.7029 44 54.8571 44Z", fill: "#016FD0" }), jsxRuntimeExports.jsx("path", { d: "M54.8571 1.76C56.7429 1.76 58.2857 3.344 58.2857 5.28V38.72C58.2857 40.656 56.7429 42.24 54.8571 42.24H5.14286C3.25714 42.24 1.71429 40.656 1.71429 38.72V5.28C1.71429 3.344 3.25714 1.76 5.14286 1.76H54.8571ZM54.8571 0H5.14286C2.29714 0 0 2.3584 0 5.28V38.72C0 41.6416 2.29714 44 5.14286 44H54.8571C57.7029 44 60 41.6416 60 38.72V5.28C60 2.3584 57.7029 0 54.8571 0Z", fill: "#EAEAEA" }), jsxRuntimeExports.jsx("path", { d: "M12.6966 32.7362V23.5948H22.1006L23.1096 24.9484L24.1519 23.5946H58.2863V32.106C58.2863 32.106 57.3936 32.7271 56.3611 32.7362H37.4603L36.3227 31.2951V32.7362H32.5951V30.2763C32.5951 30.2763 32.086 30.6198 30.9851 30.6198H29.7162V32.7362H24.0722L23.0646 31.3534L22.0416 32.7362H12.6966ZM1.71484 16.7049L3.83542 11.6162H7.50296L8.70639 14.4667V11.6162H13.2654L13.9819 13.6765L14.676 11.6162H35.1412V12.652C35.1412 12.652 36.2172 11.6162 37.9854 11.6162L44.6255 11.6401L45.8082 14.4532V11.6162H49.6233L50.6735 13.2322V11.6162H54.5236V20.7577H50.6733L49.667 19.1365V20.7577H44.0618L43.498 19.3166H41.9911L41.4366 20.7577H37.6353C36.1139 20.7577 35.1414 19.7432 35.1414 19.7432V20.7577H29.4098L28.2724 19.3166V20.7577H6.9597L6.39639 19.3166H4.89416L4.33496 20.7577H1.71484V16.7049Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M4.741 12.7327L1.89648 19.5171H3.74826L4.27317 18.1584H7.32443L7.84643 19.5171H9.73934L6.8974 12.7327H4.741ZM5.7934 14.3114L6.7234 16.6856H4.86066L5.79323 14.3116L5.7934 14.3114ZM9.93511 19.5159V12.7314L12.5665 12.7415L14.0974 17.1158L15.5914 12.7316H18.2021V19.5159H16.5487V14.5168L14.796 19.5159H13.346L11.5884 14.5168V19.5159H9.93511ZM19.3333 19.5159V12.7314H24.7287V14.2491H21.0041V15.4096H24.6418V16.8379H21.0041V18.0431H24.7287V19.5159H19.3333ZM25.686 12.7327V19.5171H27.3394V17.1068H28.0354L30.018 19.5171H32.0384L29.863 17.0176C30.7558 16.9401 31.6767 16.1541 31.6767 14.9337C31.6767 13.506 30.5844 12.7327 29.3653 12.7327H25.686ZM27.3394 14.2502H29.2292C29.6827 14.2502 30.0127 14.6139 30.0127 14.9644C30.0127 15.4151 29.5851 15.6786 29.2537 15.6786H27.3394V14.2502ZM34.04 19.5161H32.3518V12.7314H34.04V19.5161ZM38.0429 19.5161H37.6786C35.9155 19.5161 34.8449 18.091 34.8449 16.1517C34.8449 14.1644 35.9035 12.7314 38.13 12.7314H39.9574V14.3383H38.0631C37.1593 14.3383 36.5203 15.0619 36.5203 16.1684C36.5203 17.4822 37.2511 18.034 38.304 18.034H38.7391L38.0431 19.5159L38.0429 19.5161ZM41.6408 12.7327L38.7963 19.5171H40.6483L41.173 18.1584H44.2243L44.7464 19.5171H46.639L43.7972 12.7327H41.6408ZM42.6932 14.3114L43.6232 16.6856H41.7605L42.6931 14.3116L42.6932 14.3114ZM46.8322 19.5159V12.7314H48.9343L51.6183 16.9942V12.7314H53.2717V19.5159H51.2376L48.4855 15.1418V19.5159H46.8322ZM13.938 31.3889V24.6044H19.3333V26.1219H15.6089V27.2824H19.2463V28.7108H15.6089V29.9159H19.3333V31.389L13.938 31.3889ZM40.3752 31.3889V24.6044H45.7705V26.1219H42.0459V27.2824H45.6661V28.7108H42.0459V29.9159H45.7704V31.389L40.3752 31.3889ZM19.5427 31.3889L22.1696 28.0383L19.4804 24.6044H21.5635L23.1653 26.7275L24.7724 24.6044H26.7739L24.1198 27.9968L26.7516 31.389H24.6687L23.1135 29.2996L21.5962 31.389H19.5428L19.5427 31.3889ZM26.9477 24.6055V31.3899H28.6447V29.2475H30.385C31.8576 29.2475 32.9739 28.446 32.9739 26.8873C32.9739 25.5962 32.0984 24.6055 30.6 24.6055H26.9477ZM28.6447 26.1398H30.4776C30.9533 26.1398 31.2934 26.439 31.2934 26.9209C31.2934 27.3738 30.955 27.702 30.4723 27.702H28.6447V26.1398ZM33.6919 24.6042V31.3889H35.3453V28.9785H36.0415L38.0239 31.3889H40.0445L37.8691 28.8893C38.7617 28.8119 39.6828 28.0258 39.6828 26.8055C39.6828 25.3778 38.5904 24.6042 37.3712 24.6042H33.6919ZM35.3453 26.1219H37.2353C37.6887 26.1219 38.0185 26.4857 38.0185 26.8361C38.0185 27.2866 37.5912 27.5503 37.2598 27.5503H35.3453V26.1219ZM46.5361 31.3889V29.9157H49.8452C50.3348 29.9157 50.5469 29.6445 50.5469 29.3467C50.5469 29.0616 50.3355 28.7731 49.8452 28.7731H48.35C47.0503 28.7731 46.3263 27.9609 46.3263 26.7412C46.3263 25.6534 46.9892 24.6042 48.9207 24.6042H52.1405L51.4443 26.1309H48.6596C48.1273 26.1309 47.9635 26.4174 47.9635 26.6911C47.9635 26.9723 48.1659 27.2824 48.5725 27.2824H50.1389C51.5878 27.2824 52.2166 28.1255 52.2166 29.2295C52.2166 30.4166 51.516 31.3889 50.06 31.3889H46.5363H46.5361ZM52.6047 31.3889V29.9157H55.9136C56.4032 29.9157 56.6153 29.6445 56.6153 29.3467C56.6153 29.0616 56.4039 28.7731 55.9136 28.7731H54.4184C53.1187 28.7731 52.3947 27.9609 52.3947 26.7412C52.3947 25.6534 53.0576 24.6042 54.9891 24.6042H58.2089L57.5127 26.1309H54.7279C54.1956 26.1309 54.0317 26.4174 54.0317 26.6911C54.0317 26.9723 54.234 27.2824 54.6408 27.2824H56.2071C57.656 27.2824 58.2848 28.1255 58.2848 29.2295C58.2848 30.4166 57.5842 31.3889 56.1283 31.3889H52.6047Z", fill: "#016FD0" })] }) }), jsxRuntimeExports.jsxs("defs", { children: [jsxRuntimeExports.jsx("clipPath", { id: "clip0_738_38831", children: jsxRuntimeExports.jsx("rect", { width: "60", height: "43", fill: "white" }) }), jsxRuntimeExports.jsx("clipPath", { id: "clip1_738_38831", children: jsxRuntimeExports.jsx("rect", { width: "60", height: "44", fill: "white" }) })] })] }));
};
AmexCardIcon.propTypes = {
    /**
     * How height should the icon be?
     */
    height: PropTypes.number,
    /**
     * How width should the icon be?
     */
    width: PropTypes.number,
    /**
     * Alternate white and dark mode
     */
    color: PropTypes.string,
};

const ClockOutlineIcon = ({ height = 100, width = 100, color = '#000000' }) => {
    return (jsxRuntimeExports.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: width, height: height, viewBox: "0 0 24 24", fill: "none", children: [jsxRuntimeExports.jsx("path", { d: "M12 1.5C6.20156 1.5 1.5 6.20156 1.5 12C1.5 17.7984 6.20156 22.5 12 22.5C17.7984 22.5 22.5 17.7984 22.5 12C22.5 6.20156 17.7984 1.5 12 1.5ZM12 20.7188C7.18594 20.7188 3.28125 16.8141 3.28125 12C3.28125 7.18594 7.18594 3.28125 12 3.28125C16.8141 3.28125 20.7188 7.18594 20.7188 12C20.7188 16.8141 16.8141 20.7188 12 20.7188Z", fill: color }), jsxRuntimeExports.jsx("path", { d: "M16.0945 14.9672L12.7523 12.5508V6.75C12.7523 6.64687 12.668 6.5625 12.5648 6.5625H11.4375C11.3344 6.5625 11.25 6.64687 11.25 6.75V13.2047C11.25 13.2656 11.2781 13.3219 11.3273 13.357L15.2039 16.1836C15.2883 16.2445 15.4055 16.2258 15.4664 16.1437L16.1367 15.2297C16.1976 15.1429 16.1789 15.0258 16.0945 14.9672Z", fill: color })] }));
};
ClockOutlineIcon.propTypes = {
    /**
     * How height should the icon be?
     */
    height: PropTypes.number,
    /**
     * How width should the icon be?
     */
    width: PropTypes.number,
    /**
     * Alternate white and dark mode
     */
    color: PropTypes.string,
};

const ReturnArrowIcon = ({ height = 100, width = 100, color = '#000000', direction }) => {
    let transformationStyle = '';
    switch (direction) {
        case 'right':
            transformationStyle = 'rotate(180deg)';
            break;
        case 'up':
            transformationStyle = 'rotate(90deg)';
            break;
        case 'down':
            transformationStyle = 'rotate(270deg)';
            break;
    }
    return (jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: width, height: height, viewBox: "0 0 10 12", fill: "none", style: { transform: transformationStyle }, children: jsxRuntimeExports.jsx("path", { d: "M3.94421 6L9.48821 11.448H6.03221L0.512207 6L6.03221 0.552002H9.48821L3.94421 6Z", fill: color }) }));
};
ReturnArrowIcon.propTypes = {
    /**
     * How height should the icon be?
     */
    height: PropTypes.number,
    /**
       * How width should the icon be?
       */
    width: PropTypes.number,
    /**
     * Alternate white and dark mode
     */
    color: PropTypes.string,
    /**
      * Alternate direction of arrow
      */
    direction: PropTypes.oneOf(['left', 'right', 'up', 'down']),
};

const CloseUpdIcon = ({ height = 100, width = 100, color = '#000000' }) => {
    return (jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: width, height: height, viewBox: "0 0 20 20", fill: "none", children: jsxRuntimeExports.jsx("path", { d: "M10.0007 11.2178L15.4492 16.6663L16.6673 15.4481L11.2188 9.99968L16.6673 4.55124L15.4492 3.33309L10.0007 8.78153L4.55214 3.33301L3.33398 4.55116L8.78254 9.99967L3.33398 15.4482L4.55214 16.6663L10.0007 11.2178Z", fill: color }) }));
};
CloseUpdIcon.propTypes = {
    /**
     * How height should the icon be?
     */
    height: PropTypes.number,
    /**
     * How width should the icon be?
     */
    width: PropTypes.number,
    color: PropTypes.string,
};

const CalendarIcon = ({ height = 100, width = 100, color = '#000000' }) => {
    return (jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: width, height: height, viewBox: "0 0 18 18", fill: "none", children: jsxRuntimeExports.jsx("g", { id: "Icon / Outlined / Calendar", children: jsxRuntimeExports.jsx("path", { id: "Vector", d: "M15.4688 3.23438H12.5156V2.10938C12.5156 2.03203 12.4523 1.96875 12.375 1.96875H11.3906C11.3133 1.96875 11.25 2.03203 11.25 2.10938V3.23438H6.75V2.10938C6.75 2.03203 6.68672 1.96875 6.60938 1.96875H5.625C5.54766 1.96875 5.48438 2.03203 5.48438 2.10938V3.23438H2.53125C2.22012 3.23438 1.96875 3.48574 1.96875 3.79688V15.4688C1.96875 15.7799 2.22012 16.0312 2.53125 16.0312H15.4688C15.7799 16.0312 16.0312 15.7799 16.0312 15.4688V3.79688C16.0312 3.48574 15.7799 3.23438 15.4688 3.23438ZM14.7656 14.7656H3.23438V8.08594H14.7656V14.7656ZM3.23438 6.89062V4.5H5.48438V5.34375C5.48438 5.42109 5.54766 5.48438 5.625 5.48438H6.60938C6.68672 5.48438 6.75 5.42109 6.75 5.34375V4.5H11.25V5.34375C11.25 5.42109 11.3133 5.48438 11.3906 5.48438H12.375C12.4523 5.48438 12.5156 5.42109 12.5156 5.34375V4.5H14.7656V6.89062H3.23438Z", fill: color }) }) }));
};
CalendarIcon.propTypes = {
    /**
     * How height should the icon be?
     */
    height: PropTypes.number,
    /**
     * How width should the icon be?
     */
    width: PropTypes.number,
    /**
     * Alternate white and dark mode
     */
    color: PropTypes.string,
};

const RocketIcon = ({ height = 100, width = 100, color = '#000000' }) => {
    return (jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: width, height: height, viewBox: "0 0 19 18", fill: "none", children: jsxRuntimeExports.jsx("g", { id: "Icon / Outlined / Rocket", children: jsxRuntimeExports.jsx("path", { id: "Vector", d: "M15.6875 12.9375C15.6875 10.9758 14.5379 9.28125 12.875 8.49199V5.57754C12.875 5.31211 12.7818 5.05547 12.6096 4.85332L9.93066 1.67695C9.81816 1.54336 9.6582 1.47656 9.5 1.47656C9.3418 1.47656 9.18184 1.54336 9.06934 1.67695L6.39043 4.85332C6.21934 5.05588 6.12532 5.31239 6.125 5.57754V8.49199C4.46211 9.28125 3.3125 10.9758 3.3125 12.9375H6.06348C6.02305 13.0641 6.00195 13.2012 6.00195 13.3559C6.00195 13.7443 6.13555 14.124 6.37812 14.4246C6.57613 14.6704 6.83836 14.8566 7.13574 14.9625C7.5418 15.9117 8.46465 16.5234 9.5 16.5234C10.0115 16.5234 10.5072 16.3723 10.9309 16.0875C11.3457 15.8098 11.6674 15.4213 11.8625 14.9625C12.1598 14.8573 12.422 14.6717 12.6201 14.4264C12.863 14.1231 12.9957 13.7462 12.9963 13.3576C12.9963 13.21 12.977 13.0693 12.9418 12.9393H15.6875V12.9375ZM13.8998 10.923C14.065 11.1797 14.1986 11.4557 14.2953 11.7422H12.8047V9.8209C13.2432 10.1071 13.6164 10.4827 13.8998 10.923ZM7.32031 8.49199V5.60391L9.5 3.01992L11.6797 5.60391V11.7422H7.32031V8.49199ZM4.70469 11.7422C4.80137 11.4557 4.93496 11.1797 5.1002 10.923C5.38672 10.4801 5.75938 10.1057 6.19531 9.8209V11.7422H4.70469ZM11.5408 13.7848C11.4494 13.8375 11.3439 13.8586 11.2402 13.8445L10.8975 13.8023L10.8482 14.1434C10.7533 14.8096 10.1732 15.3123 9.5 15.3123C8.82676 15.3123 8.24668 14.8096 8.15176 14.1434L8.10254 13.8006L7.75977 13.8445C7.65556 13.857 7.55013 13.8354 7.45918 13.783C7.30625 13.6951 7.21133 13.5316 7.21133 13.3541C7.21133 13.1678 7.31504 13.0131 7.46797 12.9357H11.5338C11.6885 13.0148 11.7904 13.1695 11.7904 13.3541C11.7887 13.5334 11.6937 13.6986 11.5408 13.7848ZM8.65625 7.03125C8.65625 7.25503 8.74514 7.46964 8.90338 7.62787C9.06161 7.78611 9.27622 7.875 9.5 7.875C9.72378 7.875 9.93839 7.78611 10.0966 7.62787C10.2549 7.46964 10.3438 7.25503 10.3438 7.03125C10.3438 6.80747 10.2549 6.59286 10.0966 6.43463C9.93839 6.27639 9.72378 6.1875 9.5 6.1875C9.27622 6.1875 9.06161 6.27639 8.90338 6.43463C8.74514 6.59286 8.65625 6.80747 8.65625 7.03125Z", fill: color }) }) }));
};
RocketIcon.propTypes = {
    /**
     * How height should the icon be?
     */
    height: PropTypes.number,
    /**
     * How width should the icon be?
     */
    width: PropTypes.number,
    /**
     * Alternate white and dark mode
     */
    color: PropTypes.string,
};

const MovieCameraIcon = ({ height = 100, width = 100, color = '#000000' }) => {
    return (jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: width, height: height, viewBox: "0 0 18 18", fill: "none", children: jsxRuntimeExports.jsx("g", { id: "Icon / Outlined / VideoCamera", children: jsxRuntimeExports.jsx("path", { id: "Vector", d: "M16.0312 5.31387L13.7812 6.60938V3.9375C13.7812 3.31699 13.2768 2.8125 12.6562 2.8125H2.25C1.62949 2.8125 1.125 3.31699 1.125 3.9375V14.0625C1.125 14.683 1.62949 15.1875 2.25 15.1875H12.6562C13.2768 15.1875 13.7812 14.683 13.7812 14.0625V11.3906L16.0312 12.6861C16.4057 12.9023 16.875 12.6316 16.875 12.201V5.80078C16.875 5.36836 16.4057 5.09766 16.0312 5.31387ZM12.5156 13.9219H2.39062V4.07812H12.5156V13.9219ZM15.6094 10.9863L13.7812 9.93516V8.0666L15.6094 7.01367V10.9863ZM3.65625 6.32812H5.625C5.70234 6.32812 5.76562 6.26484 5.76562 6.1875V5.34375C5.76562 5.26641 5.70234 5.20312 5.625 5.20312H3.65625C3.57891 5.20312 3.51562 5.26641 3.51562 5.34375V6.1875C3.51562 6.26484 3.57891 6.32812 3.65625 6.32812Z", fill: color }) }) }));
};
MovieCameraIcon.propTypes = {
    /**
     * How height should the icon be?
     */
    height: PropTypes.number,
    /**
     * How width should the icon be?
     */
    width: PropTypes.number,
    /**
     * Alternate white and dark mode
     */
    color: PropTypes.string,
};

const PhoneIcon = ({ height = 100, width = 100, color = '#000000' }) => {
    return (jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: width, height: height, viewBox: "0 0 19 18", fill: "none", children: jsxRuntimeExports.jsx("g", { id: "Icon / Outlined / Phone", children: jsxRuntimeExports.jsx("path", { id: "Vector", d: "M15.9178 4.1959L14.0457 2.32559C13.8172 2.09707 13.5113 1.96875 13.1879 1.96875C12.8645 1.96875 12.5586 2.09531 12.3301 2.32559L10.3139 4.33828C10.0854 4.5668 9.95703 4.87441 9.95703 5.19785C9.95703 5.52305 10.0836 5.82715 10.3139 6.05742L11.8889 7.63418C11.5301 8.47017 11.0145 9.22974 10.3701 9.87187C9.725 10.5205 8.9709 11.032 8.13418 11.3941L6.55918 9.81738C6.33066 9.58887 6.0248 9.46055 5.70137 9.46055C5.54183 9.45996 5.38379 9.49121 5.23649 9.55249C5.08919 9.61376 4.9556 9.70382 4.84355 9.81738L2.82559 11.8301C2.59707 12.0586 2.46875 12.3662 2.46875 12.6896C2.46875 13.0148 2.59531 13.3189 2.82559 13.5492L4.6959 15.4195C5.08613 15.8098 5.62402 16.033 6.17598 16.033C6.29023 16.033 6.40098 16.0242 6.51348 16.0049C8.84082 15.6217 11.1506 14.3824 13.0156 12.5191C14.8789 10.6523 16.1164 8.34258 16.5031 6.01348C16.6139 5.35254 16.3924 4.67227 15.9178 4.1959ZM15.2568 5.8043C14.9141 7.87676 13.7996 9.94395 12.1209 11.6227C10.4422 13.3014 8.37676 14.4158 6.3043 14.7586C6.04414 14.8025 5.77695 14.7146 5.58711 14.5266L3.7502 12.6896L5.69785 10.7402L7.80371 12.8496L7.81953 12.8654L8.19922 12.7248C9.35046 12.3015 10.3959 11.633 11.2631 10.7655C12.1302 9.89803 12.7984 8.85237 13.2213 7.70098L13.3619 7.32129L11.2385 5.19961L13.1861 3.2502L15.023 5.08711C15.2129 5.27695 15.3008 5.54414 15.2568 5.8043Z", fill: color }) }) }));
};
PhoneIcon.propTypes = {
    /**
     * How height should the icon be?
     */
    height: PropTypes.number,
    /**
     * How width should the icon be?
     */
    width: PropTypes.number,
    /**
     * Alternate white and dark mode
     */
    color: PropTypes.string,
};

const QuestionCircleIcon = ({ height = 100, width = 100, color = '#000000' }) => {
    return (jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: width, height: height, viewBox: "0 0 19 18", fill: "none", children: jsxRuntimeExports.jsx("g", { id: "Icon / Outlined / QuestionCircle", children: jsxRuntimeExports.jsxs("g", { id: "Vector", children: [jsxRuntimeExports.jsx("path", { d: "M9.5 1.125C5.15117 1.125 1.625 4.65117 1.625 9C1.625 13.3488 5.15117 16.875 9.5 16.875C13.8488 16.875 17.375 13.3488 17.375 9C17.375 4.65117 13.8488 1.125 9.5 1.125ZM9.5 15.5391C5.88945 15.5391 2.96094 12.6105 2.96094 9C2.96094 5.38945 5.88945 2.46094 9.5 2.46094C13.1105 2.46094 16.0391 5.38945 16.0391 9C16.0391 12.6105 13.1105 15.5391 9.5 15.5391Z", fill: color }), jsxRuntimeExports.jsx("path", { d: "M11.4617 5.56699C10.9344 5.10469 10.2383 4.85156 9.5 4.85156C8.76172 4.85156 8.06563 5.10645 7.53828 5.56699C6.98984 6.04688 6.6875 6.69199 6.6875 7.38281V7.51641C6.6875 7.59375 6.75078 7.65703 6.82812 7.65703H7.67188C7.74922 7.65703 7.8125 7.59375 7.8125 7.51641V7.38281C7.8125 6.60762 8.57012 5.97656 9.5 5.97656C10.4299 5.97656 11.1875 6.60762 11.1875 7.38281C11.1875 7.92949 10.8008 8.43047 10.2014 8.66074C9.82871 8.80313 9.5123 9.05273 9.28555 9.37969C9.05527 9.71367 8.93574 10.1145 8.93574 10.5205V10.8984C8.93574 10.9758 8.99902 11.0391 9.07637 11.0391H9.92012C9.99746 11.0391 10.0607 10.9758 10.0607 10.8984V10.4994C10.0617 10.3288 10.114 10.1624 10.2109 10.0219C10.3077 9.88141 10.4447 9.77339 10.6039 9.71191C11.641 9.31289 12.3107 8.39883 12.3107 7.38281C12.3125 6.69199 12.0102 6.04688 11.4617 5.56699ZM8.79688 12.8672C8.79688 13.0537 8.87095 13.2325 9.00282 13.3644C9.13468 13.4962 9.31352 13.5703 9.5 13.5703C9.68648 13.5703 9.86532 13.4962 9.99719 13.3644C10.129 13.2325 10.2031 13.0537 10.2031 12.8672C10.2031 12.6807 10.129 12.5019 9.99719 12.37C9.86532 12.2381 9.68648 12.1641 9.5 12.1641C9.31352 12.1641 9.13468 12.2381 9.00282 12.37C8.87095 12.5019 8.79688 12.6807 8.79688 12.8672Z", fill: color })] }) }) }));
};
QuestionCircleIcon.propTypes = {
    /**
     * How height should the icon be?
     */
    height: PropTypes.number,
    /**
     * How width should the icon be?
     */
    width: PropTypes.number,
    /**
     * Alternate white and dark mode
     */
    color: PropTypes.string,
};

const FileIcon = ({ height = 100, width = 100, color = '#000000' }) => {
    return (jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: width, height: height, viewBox: "0 0 19 18", fill: "none", children: jsxRuntimeExports.jsx("g", { id: "Icon / Outlined / File", children: jsxRuntimeExports.jsx("path", { id: "Vector", d: "M15.5223 5.07305L11.7395 1.29023C11.634 1.18477 11.4916 1.125 11.3422 1.125H3.875C3.56387 1.125 3.3125 1.37637 3.3125 1.6875V16.3125C3.3125 16.6236 3.56387 16.875 3.875 16.875H15.125C15.4361 16.875 15.6875 16.6236 15.6875 16.3125V5.47207C15.6875 5.32266 15.6277 5.17852 15.5223 5.07305ZM14.3902 5.73047H11.082V2.42227L14.3902 5.73047ZM14.4219 15.6094H4.57812V2.39062H9.88672V6.1875C9.88672 6.3833 9.9645 6.57109 10.103 6.70954C10.2414 6.848 10.4292 6.92578 10.625 6.92578H14.4219V15.6094Z", fill: color }) }) }));
};
FileIcon.propTypes = {
    /**
     * How height should the icon be?
     */
    height: PropTypes.number,
    /**
     * How width should the icon be?
     */
    width: PropTypes.number,
    /**
     * Alternate white and dark mode
     */
    color: PropTypes.string,
};

const GridIcon = ({ height = 100, width = 100, color = '#000000' }) => {
    return (jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: width, height: height, viewBox: "0 0 24 24", fill: "none", children: jsxRuntimeExports.jsx("g", { id: "Icon / Filled / Apps", children: jsxRuntimeExports.jsxs("g", { id: "Union", children: [jsxRuntimeExports.jsx("path", { d: "M4 5C4 4.44772 4.44772 4 5 4H7C7.55228 4 8 4.44772 8 5V7C8 7.55228 7.55228 8 7 8H5C4.44772 8 4 7.55228 4 7V5Z", fill: color }), jsxRuntimeExports.jsx("path", { d: "M4 11C4 10.4477 4.44772 10 5 10H7C7.55228 10 8 10.4477 8 11V13C8 13.5523 7.55228 14 7 14H5C4.44772 14 4 13.5523 4 13V11Z", fill: color }), jsxRuntimeExports.jsx("path", { d: "M5 16C4.44772 16 4 16.4477 4 17V19C4 19.5523 4.44772 20 5 20H7C7.55228 20 8 19.5523 8 19V17C8 16.4477 7.55228 16 7 16H5Z", fill: color }), jsxRuntimeExports.jsx("path", { d: "M10 5C10 4.44772 10.4477 4 11 4H13C13.5523 4 14 4.44772 14 5V7C14 7.55228 13.5523 8 13 8H11C10.4477 8 10 7.55228 10 7V5Z", fill: color }), jsxRuntimeExports.jsx("path", { d: "M11 10C10.4477 10 10 10.4477 10 11V13C10 13.5523 10.4477 14 11 14H13C13.5523 14 14 13.5523 14 13V11C14 10.4477 13.5523 10 13 10H11Z", fill: color }), jsxRuntimeExports.jsx("path", { d: "M10 17C10 16.4477 10.4477 16 11 16H13C13.5523 16 14 16.4477 14 17V19C14 19.5523 13.5523 20 13 20H11C10.4477 20 10 19.5523 10 19V17Z", fill: color }), jsxRuntimeExports.jsx("path", { d: "M17 4C16.4477 4 16 4.44772 16 5V7C16 7.55228 16.4477 8 17 8H19C19.5523 8 20 7.55228 20 7V5C20 4.44772 19.5523 4 19 4H17Z", fill: color }), jsxRuntimeExports.jsx("path", { d: "M16 11C16 10.4477 16.4477 10 17 10H19C19.5523 10 20 10.4477 20 11V13C20 13.5523 19.5523 14 19 14H17C16.4477 14 16 13.5523 16 13V11Z", fill: color }), jsxRuntimeExports.jsx("path", { d: "M17 16C16.4477 16 16 16.4477 16 17V19C16 19.5523 16.4477 20 17 20H19C19.5523 20 20 19.5523 20 19V17C20 16.4477 19.5523 16 19 16H17Z", fill: color })] }) }) }));
};
GridIcon.propTypes = {
    /**
     * How height should the icon be?
     */
    height: PropTypes.number,
    /**
     * How width should the icon be?
     */
    width: PropTypes.number,
    /**
     * Alternate white and dark mode
     */
    color: PropTypes.string,
};

const PlusIcon = ({ height = 100, width = 100, color = '#000000' }) => {
    return (jsxRuntimeExports.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: width, height: height, viewBox: "0 0 21 20", fill: color, children: [jsxRuntimeExports.jsx("path", { d: "M9.91406 2.96875H11.0859C11.1901 2.96875 11.2422 3.02083 11.2422 3.125V16.875C11.2422 16.9792 11.1901 17.0312 11.0859 17.0312H9.91406C9.8099 17.0312 9.75781 16.9792 9.75781 16.875V3.125C9.75781 3.02083 9.8099 2.96875 9.91406 2.96875Z", fill: color }), jsxRuntimeExports.jsx("path", { d: "M3.9375 9.25781H17.0625C17.1667 9.25781 17.2188 9.3099 17.2188 9.41406V10.5859C17.2188 10.6901 17.1667 10.7422 17.0625 10.7422H3.9375C3.83333 10.7422 3.78125 10.6901 3.78125 10.5859V9.41406C3.78125 9.3099 3.83333 9.25781 3.9375 9.25781Z", fill: color })] }));
};
PlusIcon.propTypes = {
    /**
     * How height should the icon be?
     */
    height: PropTypes.number,
    /**
     * How width should the icon be?
     */
    width: PropTypes.number,
    /**
     * Alternate white and dark mode
     */
    color: PropTypes.string,
};

const TrashIcon = ({ height = 100, width = 100, color = '#000000' }) => {
    return (jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: width, height: height, viewBox: "0 0 19 18", fill: color, children: jsxRuntimeExports.jsx("path", { d: "M6.82812 3.23438H6.6875C6.76484 3.23438 6.82812 3.17109 6.82812 3.09375V3.23438H12.1719V3.09375C12.1719 3.17109 12.2352 3.23438 12.3125 3.23438H12.1719V4.5H13.4375V3.09375C13.4375 2.47324 12.933 1.96875 12.3125 1.96875H6.6875C6.06699 1.96875 5.5625 2.47324 5.5625 3.09375V4.5H6.82812V3.23438ZM15.6875 4.5H3.3125C3.00137 4.5 2.75 4.75137 2.75 5.0625V5.625C2.75 5.70234 2.81328 5.76562 2.89062 5.76562H3.95234L4.38652 14.959C4.41465 15.5584 4.91035 16.0312 5.50977 16.0312H13.4902C14.0914 16.0312 14.5854 15.5602 14.6135 14.959L15.0477 5.76562H16.1094C16.1867 5.76562 16.25 5.70234 16.25 5.625V5.0625C16.25 4.75137 15.9986 4.5 15.6875 4.5ZM13.3549 14.7656H5.64512L5.21973 5.76562H13.7803L13.3549 14.7656Z", fill: color }) }));
};
TrashIcon.propTypes = {
    /**
     * How height should the icon be?
     */
    height: PropTypes.number,
    /**
     * How width should the icon be?
     */
    width: PropTypes.number,
    /**
     * Alternate white and dark mode
     */
    color: PropTypes.string,
};

const EditIcon = ({ height = 100, width = 100, color = '#000000' }) => {
    return (jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: width, height: height, viewBox: "0 0 19 18", fill: color, children: jsxRuntimeExports.jsx("path", { d: "M5.02988 13.2188C5.06504 13.2188 5.1002 13.2152 5.13535 13.21L8.09199 12.6914C8.12715 12.6844 8.16055 12.6686 8.18516 12.6422L15.6365 5.19082C15.6528 5.17456 15.6657 5.15524 15.6746 5.13398C15.6834 5.11271 15.6879 5.08992 15.6879 5.06689C15.6879 5.04387 15.6834 5.02108 15.6746 4.99981C15.6657 4.97855 15.6528 4.95923 15.6365 4.94297L12.715 2.01973C12.6816 1.98633 12.6377 1.96875 12.5902 1.96875C12.5428 1.96875 12.4988 1.98633 12.4654 2.01973L5.01406 9.47109C4.9877 9.49746 4.97187 9.5291 4.96484 9.56426L4.44629 12.5209C4.42919 12.6151 4.4353 12.712 4.46409 12.8033C4.49288 12.8945 4.54349 12.9774 4.61152 13.0447C4.72754 13.1572 4.87344 13.2188 5.02988 13.2188ZM6.21465 10.1531L12.5902 3.7793L13.8787 5.06777L7.50312 11.4416L5.94043 11.7176L6.21465 10.1531ZM15.9688 14.6953H3.03125C2.72012 14.6953 2.46875 14.9467 2.46875 15.2578V15.8906C2.46875 15.968 2.53203 16.0312 2.60938 16.0312H16.3906C16.468 16.0312 16.5312 15.968 16.5312 15.8906V15.2578C16.5312 14.9467 16.2799 14.6953 15.9688 14.6953Z", fill: color }) }));
};
EditIcon.propTypes = {
    /**
     * How height should the icon be?
     */
    height: PropTypes.number,
    /**
     * How width should the icon be?
     */
    width: PropTypes.number,
    /**
     * Alternate white and dark mode
     */
    color: PropTypes.string,
};

const InboxIcon = ({ height = 100, width = 100, color = '#000000' }) => {
    return (jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: width, height: height, viewBox: "0 0 18 18", fill: "none", children: jsxRuntimeExports.jsx("path", { d: "M15.5606 7.84563L15.5571 7.83157L13.5848 2.82004C13.4969 2.53704 13.235 2.34192 12.9379 2.34192H4.94339C4.64457 2.34192 4.37914 2.54055 4.29476 2.82708L2.45082 7.78762L2.44554 7.79993L2.44203 7.81399C2.41917 7.90012 2.41214 7.98801 2.42445 8.07414C2.42269 8.10227 2.42093 8.1304 2.42093 8.15852V14.5904C2.4214 14.8737 2.53415 15.1452 2.73448 15.3456C2.9348 15.5459 3.20638 15.6586 3.48968 15.6591H14.5147C15.1035 15.6591 15.5834 15.1792 15.5852 14.5904V8.15852C15.5852 8.13567 15.5852 8.11282 15.5834 8.09348C15.5905 8.00735 15.5834 7.92473 15.5606 7.84563ZM10.361 7.08977L10.3557 7.36575C10.3416 8.155 9.79671 8.68586 9.00042 8.68586C8.61195 8.68586 8.27796 8.56106 8.03714 8.32375C7.79632 8.08645 7.66449 7.75598 7.65746 7.36575L7.65218 7.08977H4.0346L5.43207 3.69192H12.4493L13.8854 7.08977H10.361ZM3.76917 8.43977H6.53421C6.96136 9.44348 7.87015 10.0359 9.00218 10.0359C9.59456 10.0359 10.1448 9.87063 10.5895 9.55774C10.9797 9.28352 11.2838 8.90032 11.4807 8.43977H14.2317V14.3091H3.76917V8.43977Z", fill: color }) }));
};
InboxIcon.propTypes = {
    /**
     * How height should the icon be?
     */
    height: PropTypes.number,
    /**
     * How width should the icon be?
     */
    width: PropTypes.number,
    /**
     * Alternate white and dark mode
     */
    color: PropTypes.string,
};

const CircleDollarIcon = ({ height = 100, width = 100, color = '#000000' }) => {
    return (jsxRuntimeExports.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: width, height: height, viewBox: "0 0 19 18", fill: "none", children: [jsxRuntimeExports.jsx("path", { d: "M9.50001 1.5C8.01665 1.5 6.5666 1.93987 5.33323 2.76398C4.09986 3.58809 3.13858 4.75944 2.57092 6.12988C2.00326 7.50033 1.85472 9.00832 2.14411 10.4632C2.4335 11.918 3.14782 13.2544 4.19671 14.3033C5.2456 15.3522 6.58197 16.0665 8.03683 16.3559C9.49169 16.6453 10.9997 16.4967 12.3701 15.9291C13.7406 15.3614 14.9119 14.4001 15.736 13.1668C16.5601 11.9334 17 10.4834 17 9C16.9942 7.01265 16.2022 5.10835 14.7969 3.70308C13.3916 2.2978 11.4874 1.50577 9.50001 1.5ZM9.50001 15.3275C8.24811 15.3275 7.0243 14.9563 5.98338 14.2607C4.94246 13.5652 4.13117 12.5766 3.65209 11.42C3.173 10.2634 3.04764 8.99072 3.29188 7.76287C3.53611 6.53502 4.13898 5.40717 5.02421 4.52194C5.90944 3.63671 7.03729 3.03385 8.26514 2.78962C9.49299 2.54538 10.7657 2.67074 11.9223 3.14982C13.0789 3.6289 14.0675 4.4402 14.763 5.48112C15.4585 6.52204 15.8298 7.74584 15.8298 8.99774C15.8212 10.6739 15.1516 12.2789 13.9664 13.4641C12.7812 14.6494 11.1761 15.319 9.50001 15.3275Z", fill: color }), jsxRuntimeExports.jsx("path", { d: "M9.9702 8.4371H9.03506C8.91807 8.4372 8.8022 8.41423 8.6941 8.3695C8.58599 8.32478 8.48776 8.25917 8.40503 8.17644C8.32231 8.09371 8.25671 7.99548 8.21198 7.88737C8.16725 7.77927 8.14427 7.6634 8.14437 7.54641C8.15226 7.31269 8.24864 7.09071 8.414 6.92535C8.57936 6.75999 8.80135 6.66362 9.03506 6.65573H10.8631C11.0248 6.65573 11.1799 6.5915 11.2942 6.47718C11.4085 6.36285 11.4728 6.20779 11.4728 6.04611C11.4728 5.88443 11.4085 5.72937 11.2942 5.61505C11.1799 5.50072 11.0248 5.43649 10.8631 5.43649H10.0667V4.78091C10.0667 4.70086 10.0509 4.62159 10.0202 4.54763C9.98961 4.47367 9.94472 4.40646 9.88811 4.34985C9.8315 4.29324 9.7643 4.24834 9.69034 4.2177C9.61638 4.18707 9.5371 4.1713 9.45704 4.1713C9.37699 4.1713 9.29771 4.18707 9.22375 4.2177C9.14978 4.24834 9.08259 4.29324 9.02598 4.34985C8.96937 4.40646 8.92448 4.47367 8.89384 4.54763C8.86321 4.62159 8.84743 4.70086 8.84743 4.78091V5.43876C8.31176 5.46743 7.8083 5.70354 7.44372 6.09706C7.07915 6.49057 6.88209 7.01057 6.89434 7.54687C6.90659 8.08317 7.12717 8.59363 7.50933 8.9701C7.89149 9.34656 8.4052 9.55945 8.94163 9.56364H9.97322C10.0902 9.56354 10.2061 9.58651 10.3142 9.63124C10.4223 9.67596 10.5205 9.74156 10.6032 9.82429C10.686 9.90702 10.7516 10.0052 10.7963 10.1134C10.841 10.2215 10.864 10.3373 10.8639 10.4543C10.856 10.688 10.7596 10.91 10.5943 11.0754C10.4289 11.2407 10.2069 11.3371 9.97322 11.345H8.14513C7.98345 11.345 7.82839 11.4092 7.71406 11.5236C7.59974 11.6379 7.53552 11.7929 7.53552 11.9546C7.53552 12.1163 7.59974 12.2714 7.71406 12.3857C7.82839 12.5 7.98345 12.5642 8.14513 12.5642H8.94163V13.2198C8.94163 13.3815 9.00585 13.5366 9.12017 13.6509C9.2345 13.7652 9.38955 13.8294 9.55124 13.8294C9.71291 13.8294 9.86798 13.7652 9.9823 13.6509C10.0966 13.5366 10.1608 13.3815 10.1608 13.2198V12.5635C10.6914 12.5392 11.1922 12.3113 11.559 11.9271C11.9257 11.543 12.1302 11.0322 12.1299 10.501C12.0968 9.94797 11.8558 9.42784 11.4553 9.04503C11.0547 8.66222 10.5242 8.44505 9.9702 8.4371Z", fill: color })] }));
};
CircleDollarIcon.propTypes = {
    /**
     * How height should the icon be?
     */
    height: PropTypes.number,
    /**
     * How width should the icon be?
     */
    width: PropTypes.number,
    /**
     * Alternate white and dark mode
     */
    color: PropTypes.string,
};

const ListIcon = ({ height = 100, width = 100, color = '#000000' }) => {
    return (jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: width, height: height, viewBox: "0 0 19 18", fill: "none", children: jsxRuntimeExports.jsx("path", { d: "M16.5312 3.375H6.26562C6.18828 3.375 6.125 3.43828 6.125 3.51562V4.5C6.125 4.57734 6.18828 4.64062 6.26562 4.64062H16.5312C16.6086 4.64062 16.6719 4.57734 16.6719 4.5V3.51562C16.6719 3.43828 16.6086 3.375 16.5312 3.375ZM16.5312 8.36719H6.26562C6.18828 8.36719 6.125 8.43047 6.125 8.50781V9.49219C6.125 9.56953 6.18828 9.63281 6.26562 9.63281H16.5312C16.6086 9.63281 16.6719 9.56953 16.6719 9.49219V8.50781C16.6719 8.43047 16.6086 8.36719 16.5312 8.36719ZM16.5312 13.3594H6.26562C6.18828 13.3594 6.125 13.4227 6.125 13.5V14.4844C6.125 14.5617 6.18828 14.625 6.26562 14.625H16.5312C16.6086 14.625 16.6719 14.5617 16.6719 14.4844V13.5C16.6719 13.4227 16.6086 13.3594 16.5312 13.3594ZM2.32812 4.00781C2.32812 4.13708 2.35359 4.26509 2.40306 4.38452C2.45253 4.50395 2.52503 4.61246 2.61644 4.70387C2.70785 4.79528 2.81637 4.86779 2.9358 4.91726C3.05523 4.96673 3.18323 4.99219 3.3125 4.99219C3.44177 4.99219 3.56977 4.96673 3.6892 4.91726C3.80863 4.86779 3.91715 4.79528 4.00856 4.70387C4.09997 4.61246 4.17247 4.50395 4.22194 4.38452C4.27141 4.26509 4.29688 4.13708 4.29688 4.00781C4.29688 3.87854 4.27141 3.75054 4.22194 3.63111C4.17247 3.51168 4.09997 3.40316 4.00856 3.31175C3.91715 3.22035 3.80863 3.14784 3.6892 3.09837C3.56977 3.0489 3.44177 3.02344 3.3125 3.02344C3.18323 3.02344 3.05523 3.0489 2.9358 3.09837C2.81637 3.14784 2.70785 3.22035 2.61644 3.31175C2.52503 3.40316 2.45253 3.51168 2.40306 3.63111C2.35359 3.75054 2.32812 3.87854 2.32812 4.00781ZM2.32812 9C2.32812 9.12927 2.35359 9.25727 2.40306 9.3767C2.45253 9.49613 2.52503 9.60465 2.61644 9.69606C2.70785 9.78747 2.81637 9.85997 2.9358 9.90944C3.05523 9.95891 3.18323 9.98438 3.3125 9.98438C3.44177 9.98438 3.56977 9.95891 3.6892 9.90944C3.80863 9.85997 3.91715 9.78747 4.00856 9.69606C4.09997 9.60465 4.17247 9.49613 4.22194 9.3767C4.27141 9.25727 4.29688 9.12927 4.29688 9C4.29688 8.87073 4.27141 8.74273 4.22194 8.6233C4.17247 8.50387 4.09997 8.39535 4.00856 8.30394C3.91715 8.21253 3.80863 8.14003 3.6892 8.09056C3.56977 8.04109 3.44177 8.01562 3.3125 8.01562C3.18323 8.01562 3.05523 8.04109 2.9358 8.09056C2.81637 8.14003 2.70785 8.21253 2.61644 8.30394C2.52503 8.39535 2.45253 8.50387 2.40306 8.6233C2.35359 8.74273 2.32812 8.87073 2.32812 9ZM2.32812 13.9922C2.32812 14.1215 2.35359 14.2495 2.40306 14.3689C2.45253 14.4883 2.52503 14.5968 2.61644 14.6882C2.70785 14.7797 2.81637 14.8522 2.9358 14.9016C3.05523 14.9511 3.18323 14.9766 3.3125 14.9766C3.44177 14.9766 3.56977 14.9511 3.6892 14.9016C3.80863 14.8522 3.91715 14.7797 4.00856 14.6882C4.09997 14.5968 4.17247 14.4883 4.22194 14.3689C4.27141 14.2495 4.29688 14.1215 4.29688 13.9922C4.29688 13.8629 4.27141 13.7349 4.22194 13.6155C4.17247 13.4961 4.09997 13.3875 4.00856 13.2961C3.91715 13.2047 3.80863 13.1322 3.6892 13.0827C3.56977 13.0333 3.44177 13.0078 3.3125 13.0078C3.18323 13.0078 3.05523 13.0333 2.9358 13.0827C2.81637 13.1322 2.70785 13.2047 2.61644 13.2961C2.52503 13.3875 2.45253 13.4961 2.40306 13.6155C2.35359 13.7349 2.32812 13.8629 2.32812 13.9922Z", fill: color }) }));
};
ListIcon.propTypes = {
    /**
     * How height should the icon be?
     */
    height: PropTypes.number,
    /**
     * How width should the icon be?
     */
    width: PropTypes.number,
    /**
     * Alternate white and dark mode
     */
    color: PropTypes.string,
};

const MenuIcon = ({ height = 100, width = 100, color = '#000000' }) => {
    return (jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: width, height: height, viewBox: "0 0 24 24", fill: "none", children: jsxRuntimeExports.jsx("path", { d: "M21.1875 3.75H2.8125C2.70937 3.75 2.625 3.83437 2.625 3.9375V5.4375C2.625 5.54062 2.70937 5.625 2.8125 5.625H21.1875C21.2906 5.625 21.375 5.54062 21.375 5.4375V3.9375C21.375 3.83437 21.2906 3.75 21.1875 3.75ZM21.1875 18.375H2.8125C2.70937 18.375 2.625 18.4594 2.625 18.5625V20.0625C2.625 20.1656 2.70937 20.25 2.8125 20.25H21.1875C21.2906 20.25 21.375 20.1656 21.375 20.0625V18.5625C21.375 18.4594 21.2906 18.375 21.1875 18.375ZM21.1875 11.0625H2.8125C2.70937 11.0625 2.625 11.1469 2.625 11.25V12.75C2.625 12.8531 2.70937 12.9375 2.8125 12.9375H21.1875C21.2906 12.9375 21.375 12.8531 21.375 12.75V11.25C21.375 11.1469 21.2906 11.0625 21.1875 11.0625Z", fill: color }) }));
};
MenuIcon.propTypes = {
    /**
  
     * How height should the icon be?
  
     */
    height: PropTypes.number,
    /**
  
     * How width should the icon be?
  
     */
    width: PropTypes.number,
    /**
  
     * Alternate white and dark mode
  
     */
    color: PropTypes.string,
};

const BriefcaseIcon = ({ height = 100, width = 100, color = '#000000' }) => {
    return (jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: width, height: height, viewBox: "0 0 11 11", fill: "none", children: jsxRuntimeExports.jsx("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M7.79165 1.37516V1.8335H9.62498C10.1312 1.8335 10.5416 2.2439 10.5416 2.75016V8.7085C10.5416 9.21476 10.1312 9.62516 9.62498 9.62516H1.37498C0.868718 9.62516 0.458313 9.21476 0.458313 8.7085V2.75016C0.458313 2.2439 0.868719 1.8335 1.37498 1.8335H3.20831V1.37516C3.20831 0.868902 3.61872 0.458496 4.12498 0.458496H6.87498C7.38124 0.458496 7.79165 0.868902 7.79165 1.37516ZM4.12498 1.37516H6.87498V1.8335H4.12498V1.37516ZM1.37498 4.5835C1.37498 5.08976 1.78539 5.50016 2.29165 5.50016H8.70831C9.21457 5.50016 9.62498 5.08976 9.62498 4.5835V2.75016H1.37498V4.5835ZM9.62498 6.17156C9.35532 6.32755 9.04224 6.41683 8.70831 6.41683H8.24998V6.87516C8.24998 7.12829 8.04478 7.3335 7.79165 7.3335C7.53852 7.3335 7.33331 7.12829 7.33331 6.87516V6.41683H3.66665V6.87516C3.66665 7.12829 3.46144 7.3335 3.20831 7.3335C2.95518 7.3335 2.74998 7.12829 2.74998 6.87516V6.41683H2.29165C1.95772 6.41683 1.64464 6.32755 1.37498 6.17156L1.37498 8.7085H9.62498V6.17156Z", fill: color }) }));
};
BriefcaseIcon.propTypes = {
    /**
     * How height should the icon be?
     */
    height: PropTypes.number,
    /**
     * How width should the icon be?
     */
    width: PropTypes.number,
    /**
     * Alternate white and dark mode
     */
    color: PropTypes.string,
};

const TrophyIcon = ({ height = 100, width = 100, color = '#000000' }) => {
    return (jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: width, height: height, viewBox: "0 0 13 13", fill: "none", children: jsxRuntimeExports.jsx("path", { d: "M11.0195 2.03125H9.85156V1.52344C9.85156 1.46758 9.80586 1.42188 9.75 1.42188H3.25C3.19414 1.42188 3.14844 1.46758 3.14844 1.52344V2.03125H1.98047C1.83232 2.03125 1.69024 2.0901 1.58548 2.19486C1.48073 2.29961 1.42188 2.4417 1.42188 2.58984V4.46875C1.42188 5.50596 2.18359 6.36797 3.17637 6.52539C3.37314 8.00059 4.55762 9.16221 6.04297 9.32471V10.6603H3.55469C3.32998 10.6603 3.14844 10.8418 3.14844 11.0665V11.4766C3.14844 11.5324 3.19414 11.5781 3.25 11.5781H9.75C9.80586 11.5781 9.85156 11.5324 9.85156 11.4766V11.0665C9.85156 10.8418 9.67002 10.6603 9.44531 10.6603H6.95703V9.32471C8.44238 9.16221 9.62685 8.00059 9.82363 6.52539C10.8164 6.36797 11.5781 5.50596 11.5781 4.46875V2.58984C11.5781 2.4417 11.5193 2.29961 11.4145 2.19486C11.3098 2.0901 11.1677 2.03125 11.0195 2.03125ZM2.33594 4.46875V2.94531H3.14844V5.58086C2.91262 5.50553 2.70684 5.35722 2.5608 5.15733C2.41476 4.95744 2.33601 4.71631 2.33594 4.46875ZM8.9375 6.09375C8.9375 6.71709 8.69502 7.30488 8.25322 7.74541C7.81143 8.18721 7.2249 8.42969 6.60156 8.42969H6.39844C5.7751 8.42969 5.1873 8.18721 4.74678 7.74541C4.30498 7.30361 4.0625 6.71709 4.0625 6.09375V2.33594H8.9375V6.09375ZM10.6641 4.46875C10.6641 4.98926 10.3226 5.43105 9.85156 5.58086V2.94531H10.6641V4.46875Z", fill: color }) }));
};
TrophyIcon.propTypes = {
    /**
     * How height should the icon be?
     */
    height: PropTypes.number,
    /**
     * How width should the icon be?
     */
    width: PropTypes.number,
    /**
     * Alternate white and dark mode
     */
    color: PropTypes.string,
};

const ThunderIcon = ({ height = 100, width = 100, color = '#000000' }) => {
    return (jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: width, height: height, viewBox: "0 0 11 11", fill: "none", children: jsxRuntimeExports.jsx("g", { id: "Icon / Outlined / Thunderbolt", children: jsxRuntimeExports.jsx("path", { id: "Vector", d: "M9.10956 3.85967H6.74305L8.87108 1.1709C8.91512 1.11396 8.87538 1.03125 8.8034 1.03125H4.68378C4.6537 1.03125 4.62469 1.04736 4.60965 1.07422L1.82635 5.88135C1.79305 5.93828 1.83387 6.01025 1.90047 6.01025H3.77391L2.81356 9.85166C2.79315 9.93545 2.89413 9.99453 2.95643 9.93437L9.16864 4.00684C9.2245 3.9542 9.1869 3.85967 9.10956 3.85967ZM4.06288 7.86865L4.71063 5.27979H3.01981L5.05653 1.76279H7.46922L5.23163 4.59121H7.49823L4.06288 7.86865Z", fill: color }) }) }));
};
ThunderIcon.propTypes = {
    /**
     * How height should the icon be?
     */
    height: PropTypes.number,
    /**
     * How width should the icon be?
     */
    width: PropTypes.number,
    /**
     * Alternate white and dark mode
     */
    color: PropTypes.string,
};

const CreditCardIcon = ({ height = 100, width = 100, color = '#000000' }) => {
    return (jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: width, height: height, viewBox: "0 0 24 24", fill: "none", children: jsxRuntimeExports.jsx("path", { d: "M21.75 3.75H2.25C1.83516 3.75 1.5 4.08516 1.5 4.5V19.5C1.5 19.9148 1.83516 20.25 2.25 20.25H21.75C22.1648 20.25 22.5 19.9148 22.5 19.5V4.5C22.5 4.08516 22.1648 3.75 21.75 3.75ZM3.1875 5.4375H20.8125V8.25H3.1875V5.4375ZM20.8125 18.5625H3.1875V10.3125H20.8125V18.5625ZM15.2578 17.0625H19.125C19.2281 17.0625 19.3125 16.9781 19.3125 16.875V15.1875C19.3125 15.0844 19.2281 15 19.125 15H15.2578C15.1547 15 15.0703 15.0844 15.0703 15.1875V16.875C15.0703 16.9781 15.1547 17.0625 15.2578 17.0625Z", fill: color }) }));
};
CreditCardIcon.propTypes = {
    /**
     * How height should the icon be?
     */
    height: PropTypes.number,
    /**
     * How width should the icon be?
     */
    width: PropTypes.number,
    /**
     * Alternate white and dark mode
     */
    color: PropTypes.string,
};

const BugIcon = ({ height = 100, width = 100, color = '#000000', outline = false }) => {
    return outline ? (jsxRuntimeExports.jsxs("svg", { width: width, height: height, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsxRuntimeExports.jsx("path", { d: "M7.125 6.56262H16.875C16.9781 6.56262 17.0625 6.47825 17.0625 6.37512C17.0625 5.43762 16.8562 4.57747 16.4555 3.84153C16.0523 3.10325 15.4594 2.51028 14.7211 2.10715C13.9852 1.70637 13.125 1.50012 12.1875 1.50012H11.8125C10.875 1.50012 10.0148 1.70637 9.27891 2.10715C8.54062 2.51028 7.94766 3.10325 7.54453 3.84153C7.14375 4.57747 6.9375 5.43762 6.9375 6.37512C6.9375 6.47825 7.02187 6.56262 7.125 6.56262Z", fill: color }), jsxRuntimeExports.jsx("path", { d: "M22.0312 12.0001H18.5625V9.65637C20.3625 9.65637 21.8203 8.19856 21.8203 6.39856C21.8203 6.29543 21.7359 6.21106 21.6328 6.21106H20.2266C20.1234 6.21106 20.0391 6.29543 20.0391 6.39856C20.0391 7.21418 19.3781 7.87512 18.5625 7.87512H5.4375C4.62188 7.87512 3.96094 7.21418 3.96094 6.39856C3.96094 6.29543 3.87656 6.21106 3.77344 6.21106H2.36719C2.26406 6.21106 2.17969 6.29543 2.17969 6.39856C2.17969 8.19856 3.6375 9.65637 5.4375 9.65637V12.0001H1.96875C1.86562 12.0001 1.78125 12.0845 1.78125 12.1876V13.5001C1.78125 13.6032 1.86562 13.6876 1.96875 13.6876H5.4375V15.9376C5.4375 16.09 5.44219 16.2423 5.45391 16.39C3.84609 17.0767 2.71875 18.6728 2.71875 20.5314C2.71875 20.6345 2.80313 20.7189 2.90625 20.7189H4.21875C4.32188 20.7189 4.40625 20.6345 4.40625 20.5314C4.40625 19.4954 4.96641 18.5884 5.80313 18.1009C5.94375 18.504 6.12187 18.8884 6.33516 19.2493C6.90469 20.222 7.71797 21.0353 8.69062 21.6048C9.36797 22.0009 10.1203 22.2798 10.9242 22.4134C11.0273 22.4134 11.1117 22.329 11.1117 22.2259V11.3439C11.1117 11.2407 11.1961 11.1564 11.2992 11.1564H12.7055C12.8086 11.1564 12.893 11.2407 12.893 11.3439V22.2236C12.893 22.3267 12.9773 22.4111 13.0805 22.4111C13.8844 22.2775 14.6367 21.9986 15.3141 21.6025C16.2867 21.0329 17.1 20.2197 17.6695 19.247C17.8828 18.8837 18.0609 18.4993 18.2016 18.0986C19.0336 18.5884 19.5938 19.4954 19.5938 20.5314C19.5938 20.6345 19.6781 20.7189 19.7812 20.7189H21.0938C21.1969 20.7189 21.2812 20.6345 21.2812 20.5314C21.2812 18.6728 20.1539 17.0767 18.5461 16.39C18.5555 16.24 18.5625 16.09 18.5625 15.9376V13.6876H22.0312C22.1344 13.6876 22.2188 13.6032 22.2188 13.5001V12.1876C22.2188 12.0845 22.1344 12.0001 22.0312 12.0001Z", fill: color })] })) : (jsxRuntimeExports.jsxs("svg", { width: width, height: height, viewBox: "0 0 22 22", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsxRuntimeExports.jsx("path", { d: "M6.125 5.56262H7.4375C7.54063 5.56262 7.625 5.47825 7.625 5.37512C7.625 4.71184 7.76328 4.12825 8.02578 3.65247C8.27422 3.19778 8.63516 2.83684 9.08984 2.5884C9.56797 2.32825 10.1492 2.18762 10.8125 2.18762H11.1875C11.8508 2.18762 12.4344 2.3259 12.9102 2.5884C13.3648 2.83684 13.7258 3.19778 13.9742 3.65247C14.2344 4.13059 14.375 4.71184 14.375 5.37512C14.375 5.47825 14.4594 5.56262 14.5625 5.56262H15.875C15.9781 5.56262 16.0625 5.47825 16.0625 5.37512C16.0625 4.43762 15.8562 3.57747 15.4555 2.84153C15.0523 2.10325 14.4594 1.51028 13.7211 1.10715C12.9852 0.706372 12.125 0.500122 11.1875 0.500122H10.8125C9.875 0.500122 9.01484 0.706372 8.27891 1.10715C7.54062 1.51028 6.94766 2.10325 6.54453 2.84153C6.14375 3.57747 5.9375 4.43762 5.9375 5.37512C5.9375 5.47825 6.02187 5.56262 6.125 5.56262Z", fill: color }), jsxRuntimeExports.jsx("path", { d: "M21.0312 11.0001H17.5625V8.65637C19.3625 8.65637 20.8203 7.19856 20.8203 5.39856C20.8203 5.29543 20.7359 5.21106 20.6328 5.21106H19.2266C19.1234 5.21106 19.0391 5.29543 19.0391 5.39856C19.0391 6.21418 18.3781 6.87512 17.5625 6.87512H4.4375C3.62188 6.87512 2.96094 6.21418 2.96094 5.39856C2.96094 5.29543 2.87656 5.21106 2.77344 5.21106H1.36719C1.26406 5.21106 1.17969 5.29543 1.17969 5.39856C1.17969 7.19856 2.6375 8.65637 4.4375 8.65637V11.0001H0.96875C0.865625 11.0001 0.78125 11.0845 0.78125 11.1876V12.5001C0.78125 12.6032 0.865625 12.6876 0.96875 12.6876H4.4375V14.9376C4.4375 15.09 4.44219 15.2423 4.45391 15.39C2.84609 16.0767 1.71875 17.6728 1.71875 19.5314C1.71875 19.6345 1.80313 19.7189 1.90625 19.7189H3.21875C3.32188 19.7189 3.40625 19.6345 3.40625 19.5314C3.40625 18.4954 3.96641 17.5884 4.80313 17.1009C4.94375 17.504 5.12187 17.8884 5.33516 18.2493C5.90469 19.222 6.71797 20.0353 7.69062 20.6048C8.66328 21.1743 9.79297 21.5001 11 21.5001C12.207 21.5001 13.3391 21.1743 14.3117 20.6048C15.2844 20.0353 16.0977 19.222 16.6672 18.2493C16.8805 17.8861 17.0586 17.5017 17.1992 17.1009C18.0336 17.5884 18.5938 18.4954 18.5938 19.5314C18.5938 19.6345 18.6781 19.7189 18.7812 19.7189H20.0938C20.1969 19.7189 20.2812 19.6345 20.2812 19.5314C20.2812 17.6728 19.1539 16.0767 17.5461 15.39C17.5555 15.24 17.5625 15.09 17.5625 14.9376V12.6876H21.0312C21.1344 12.6876 21.2188 12.6032 21.2188 12.5001V11.1876C21.2188 11.0845 21.1344 11.0001 21.0312 11.0001ZM15.7812 14.9376C15.7812 15.8001 15.5539 16.6251 15.1297 17.3493C14.7148 18.0595 14.1219 18.6525 13.4117 19.0673C12.6875 19.4915 11.8625 19.7189 11 19.7189C10.1375 19.7189 9.3125 19.4915 8.58828 19.0673C7.87813 18.6525 7.28516 18.0595 6.87031 17.3493C6.44609 16.6251 6.21875 15.8001 6.21875 14.9376V8.65637H15.7812V14.9376Z", fill: color })] }));
};
BugIcon.propTypes = {
    /**
     * How height should the icon be?
     */
    height: PropTypes.number,
    /**
     * How width should the icon be?
     */
    width: PropTypes.number,
    /**
     * Alternate white and dark mode
     */
    color: PropTypes.string,
    /**
     * Alternate fill and no fill
     */
    outline: PropTypes.bool,
};

const CheckMarkCircleIcon = ({ height = 100, width = 100, color = '#000000' }) => {
    return (jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: width, height: height, viewBox: "0 0 24 24", fill: "none", children: jsxRuntimeExports.jsx("path", { d: "M12 1.50012C6.20156 1.50012 1.5 6.20168 1.5 12.0001C1.5 17.7986 6.20156 22.5001 12 22.5001C17.7984 22.5001 22.5 17.7986 22.5 12.0001C22.5 6.20168 17.7984 1.50012 12 1.50012ZM16.5352 8.57122L11.5992 15.415C11.5302 15.5113 11.4393 15.5897 11.3339 15.6438C11.2286 15.698 11.1118 15.7262 10.9934 15.7262C10.8749 15.7262 10.7582 15.698 10.6528 15.6438C10.5474 15.5897 10.4565 15.5113 10.3875 15.415L7.46484 11.365C7.37578 11.2407 7.46484 11.0673 7.61719 11.0673H8.71641C8.95547 11.0673 9.18281 11.1822 9.32344 11.379L10.9922 13.6947L14.6766 8.58528C14.8172 8.39075 15.0422 8.27356 15.2836 8.27356H16.3828C16.5352 8.27356 16.6242 8.447 16.5352 8.57122Z", fill: color }) }));
};
CheckMarkCircleIcon.propTypes = {
    /**
     * How height should the icon be?
     */
    height: PropTypes.number,
    /**
     * How width should the icon be?
     */
    width: PropTypes.number,
    /**
     * What color should the icon be?
     */
    color: PropTypes.string,
};

const CopyIcon = ({ height = 100, width = 100, color = '#000000' }) => {
    return (jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: width, height: height, viewBox: "0 0 24 24", fill: "none", children: jsxRuntimeExports.jsx("path", { d: "M19.5 1.50012H6.9375C6.83437 1.50012 6.75 1.5845 6.75 1.68762V3.00012C6.75 3.10325 6.83437 3.18762 6.9375 3.18762H18.5625V19.3126C18.5625 19.4157 18.6469 19.5001 18.75 19.5001H20.0625C20.1656 19.5001 20.25 19.4157 20.25 19.3126V2.25012C20.25 1.83528 19.9148 1.50012 19.5 1.50012ZM16.5 4.50012H4.5C4.08516 4.50012 3.75 4.83528 3.75 5.25012V17.6884C3.75 17.8876 3.82969 18.0775 3.97031 18.2181L8.03203 22.2798C8.08359 22.3314 8.14219 22.3736 8.20547 22.4087V22.4532H8.30391C8.38594 22.4837 8.47266 22.5001 8.56172 22.5001H16.5C16.9148 22.5001 17.25 22.165 17.25 21.7501V5.25012C17.25 4.83528 16.9148 4.50012 16.5 4.50012ZM8.20312 20.0673L6.18516 18.047H8.20312V20.0673ZM15.5625 20.8126H9.70312V17.4845C9.70312 16.9665 9.28359 16.547 8.76562 16.547H5.4375V6.18762H15.5625V20.8126Z", fill: color }) }));
};
CopyIcon.propTypes = {
    /**
     * How height should the icon be?
     */
    height: PropTypes.number,
    /**
     * How width should the icon be?
     */
    width: PropTypes.number,
    /**
     * What color should the icon be?
     */
    color: PropTypes.string,
};

export { AmexCardIcon, ArrowIcon, BriefcaseIcon, BugIcon, CalendarIcon, CartIcon, CheckMarkCircleIcon, CircleDollarIcon, ClockOutlineIcon, CloseUpdIcon, CopyIcon, CreditCardIcon, DiscoverCardIcon, DoorIcon, EditIcon, ExclamationIcon, EyeIcon, FileIcon, GridIcon, HomeIcon, InboxIcon, InfoCircleIcon, ListIcon, LockIcon, LoginIcon, MasterCardIcon, MenuIcon, MovieCameraIcon, NotApprovedIcon, OpenCameraIcon, OpenLinkIcon, OpenQRIcon, PasswordIcon, PaypalCardIcon, PhoneIcon, PlusIcon, QrIcon, QuestionCircleIcon, ReturnArrowIcon, RocketIcon, ThunderIcon, TrashIcon, TrophyIcon, UserCompactIcon, VisaCardIcon, WorldIcon };
//# sourceMappingURL=index.esm.js.map
