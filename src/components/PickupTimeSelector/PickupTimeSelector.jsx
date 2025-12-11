import React, { useState, useEffect } from "react";

function PickupTimeSelector({ pickupTime, setPickupTime }) {
  const [pickupOptions, setPickupOptions] = useState([]);

  const generatePickupSlots = (label) => {
    const slots = [];
    const startHour = 14; // 2 PM
    const endHour = 17; // 5 PM

    for (let hour = startHour; hour < endHour; hour++) {
      slots.push(`${label}, ${formatTime(hour)} – ${formatTime(hour, 30)}`);
      slots.push(`${label}, ${formatTime(hour, 30)} – ${formatTime(hour + 1)}`);
    }
    return slots;
  };

  const formatTime = (hour, minute = 0) => {
    const d = new Date();
    d.setHours(hour);
    d.setMinutes(minute);
    return d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  useEffect(() => {
    const now = new Date();
    const cutoffHour = 17; // 5 PM
    const afterCutoff = now.getHours() >= cutoffHour;
    const label = afterCutoff ? "Tomorrow" : "Today";

    const options = generatePickupSlots(label);
    setPickupOptions(options);
  }, []);

  return (
    <div className="mb-4">
      <label className="block font-medium mb-1">Pickup Time</label>
      <select
        value={pickupTime}
        onChange={(e) => setPickupTime(e.target.value)}
        className="w-full border rounded px-3 py-2"
        required
      >
        <option value="">Select a pickup time</option>
        {pickupOptions.map((slot) => (
          <option key={slot} value={slot}>
            {slot}
          </option>
        ))}
      </select>
      {pickupOptions.length > 0 && pickupOptions[0].startsWith("Tomorrow") && (
        <p className="text-sm text-red-600 mt-1">
          Today's pickup is closed. Only tomorrow slots are available.
        </p>
      )}
    </div>
  );
}

export default PickupTimeSelector;
