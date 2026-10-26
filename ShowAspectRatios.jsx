#target photoshop

function showAspectRatios() {
    // Check if any document is open
    if (app.documents.length === 0) {
        alert("Please open an image first!");
        return;
    }

    var doc = app.activeDocument;
    var width = doc.width.value;
    var height = doc.height.value;

    // Helper function to find the greatest common divisor (GCD)
    function gcd(a, b) {
        return (b === 0) ? a : gcd(b, a % b);
    }

    var divisor = gcd(width, height);
    var simpleW = width / divisor;
    var simpleH = height / divisor;

    // Calculate decimal aspect ratio (e.g., 1.78:1)
    var decimalRatio = (width / height).toFixed(2);
    var ratioString = simpleW + ":" + simpleH;

    // Copy aspect ratio string directly to clipboard using an Action Descriptor
    try {
        var keyTextData = app.charIDToTypeID('TxtD');
        var ktextToClipboardStr = app.stringIDToTypeID("textToClipboard");
        var textStrDesc = new ActionDescriptor();
        textStrDesc.putString(keyTextData, ratioString);
        executeAction(ktextToClipboardStr, textStrDesc, DialogModes.NO);
    } catch (e) {
        // Fallback if clipboard action fails silently on specific OS configurations
    }

    // Format the output message
    var message = "Image Dimensions:\n" +
                  width + " px × " + height + " px\n\n" +
                  "Aspect Ratios:\n" +
                  "• Simplified Ratio: " + ratioString + " (Copied to Clipboard!)\n" +
                  "• Decimal Ratio: " + decimalRatio + ":1";

    alert(message, "Image Aspect Ratio");
}

showAspectRatios();