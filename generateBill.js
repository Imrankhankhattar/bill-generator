const { createCanvas } = require('canvas');
const fs = require('fs');
const bill = require('./constants');

const generateBillImage = () => {
    const canvasWidth = 400;  // Standard receipt width
    const canvasHeight = 800; // Height will be adjusted based on content
    const canvas = createCanvas(canvasWidth, canvasHeight);
    const ctx = canvas.getContext('2d');

    // Background
    ctx.fillStyle = '#FFFEE9';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Helper function for centered text
    const centerText = (text, y) => {
        ctx.fillText(text, canvasWidth / 2, y);
    };

    // Helper function for drawing dotted lines
    const drawDottedLine = (y) => {
        ctx.beginPath();
        ctx.setLineDash([2, 2]);
        ctx.moveTo(20, y);
        ctx.lineTo(canvasWidth - 20, y);
        ctx.stroke();
        ctx.setLineDash([]);
    };

    // Restaurant Header
    ctx.fillStyle = '#000000';
    ctx.textAlign = 'center';
    ctx.font = 'bold 24px "Courier New"';
    centerText(bill.restaurant.name, 40);

    ctx.font = '14px "Courier New"';
    centerText(bill.restaurant.address, 60);
    centerText(`Tel: ${bill.restaurant.phone}`, 80);

    // Receipt Details
    ctx.font = '12px "Courier New"';
    drawDottedLine(100);
    
    ctx.textAlign = 'left';
    ctx.fillText(`Order #: ${Math.floor(Math.random() * 10000)}`, 20, 120);
    ctx.textAlign = 'right';
    ctx.fillText(`Date: ${bill.date}`, canvasWidth - 20, 120);
    // ctx.fillText(`Time: ${bill.time}`, canvasWidth - 20, 140);

    ctx.textAlign = 'left';
    // ctx.fillText(`Served By: Naqeeb`, 20, 140);
    // ctx.fillText(`Table: 3`, 20, 160);
    // ctx.fillText(`Guests: 4`, 20, 180);

    drawDottedLine(200);

    // Column Headers
    ctx.font = 'bold 12px "Courier New"';
    let yPos = 220;
    ctx.fillText("Item", 20, yPos);
    ctx.fillText("Qty", 195, yPos);
    ctx.textAlign = 'right';
    ctx.fillText("Price", 290, yPos);
    ctx.fillText("Total", canvasWidth - 20, yPos);

    drawDottedLine(yPos + 10);

    // Items
    yPos += 30;
    ctx.font = '12px "Courier New"';
    bill.items.forEach(item => {
        ctx.textAlign = 'left';
        ctx.fillText(item.name, 20, yPos);
        ctx.textAlign = 'center';
        ctx.fillText(item.quantity.toString(), 200, yPos);
        ctx.textAlign = 'right';
        ctx.fillText(`${item.price.toFixed(2)}`, 290, yPos);
        ctx.fillText(`${item.total.toFixed(2)}`, canvasWidth - 20, yPos);
        yPos += 20;
    });

    // Subtotal and Taxes
    yPos += 20;
    drawDottedLine(yPos);
    yPos += 20;

    const subtotal = bill.items.reduce((sum, item) => sum + item.total, 0);
    const tax = subtotal * 0.16; // 8% tax
    const total = subtotal + tax;

    ctx.font = '12px "Courier New"';
    ctx.textAlign = 'right';
    ctx.fillText(`Subtotal: ${subtotal.toFixed(2)}`, canvasWidth - 20, yPos);
    yPos += 20;
    ctx.fillText(`Tax (16%): ${tax.toFixed(2)}`, canvasWidth - 20, yPos);
    yPos += 20;
    
    ctx.font = 'bold 14px "Courier New"';
    ctx.fillText(`Total: ${total.toFixed(0)}`, canvasWidth - 20, yPos + 20);

    // Payment Section
    yPos += 60;
    drawDottedLine(yPos);
    yPos += 20;

    ctx.font = '12px "Courier New"';
    ctx.textAlign = 'left';
    ctx.fillText("Payment Method: CASH", 20, yPos);
    // yPos += 20;
    // ctx.fillText("Card Number: ****-****-****-1234", 20, yPos);

    // Footer
    yPos += 40;
    ctx.textAlign = 'center';
    ctx.font = 'italic 12px "Courier New"';
    centerText("Thank you for dining with us!", yPos);
    yPos += 20;
    centerText("Please come again!", yPos);
    yPos += 30;
    ctx.font = '10px "Courier New"';
    centerText("Follow us on social media @QuettaQbail", yPos);

    // Save as PNG for better quality
    const buffer = canvas.toBuffer('image/png');
    fs.writeFileSync('./receipt.png', buffer);
    console.log('Receipt generated: receipt.png');
};

generateBillImage();
