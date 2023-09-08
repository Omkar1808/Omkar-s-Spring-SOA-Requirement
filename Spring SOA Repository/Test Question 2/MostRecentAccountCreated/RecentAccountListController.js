({
    doInit: function(component, event, helper) {
        // Call the server-side controller action to retrieve the recent accounts
        var action = component.get("c.getRecentAccounts");
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.accounts", response.getReturnValue());
            } else if (state === "ERROR") {
                var errors = response.getError();
                if (errors) {
                    console.error("Error: " + errors[0].message);
                } else {
                    console.error("Unknown error occurred.");
                }
            }
        });
        $A.enqueueAction(action);
    }
})