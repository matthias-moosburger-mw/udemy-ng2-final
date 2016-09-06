System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var PreventUnsavedChangesGuard;
    return {
        setters:[],
        execute: function() {
            PreventUnsavedChangesGuard = (function () {
                function PreventUnsavedChangesGuard() {
                }
                PreventUnsavedChangesGuard.prototype.canDeactivate = function (component) {
                    if (component.form.dirty)
                        return confirm('You have unsaved changes. Are you sure you want to navigate away?');
                    return true;
                };
                return PreventUnsavedChangesGuard;
            }());
            exports_1("PreventUnsavedChangesGuard", PreventUnsavedChangesGuard);
        }
    }
});
//# sourceMappingURL=can-deactivate-on-dirty.js.map