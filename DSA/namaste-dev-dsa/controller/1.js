createNetworkUpdateLogs: async (
  userId,
  oldData,
  newData,
  source,
  personalId
) => {
  try {
    if (!oldData) return null;

    const changes = [];

    // DOB ko compare karo (agar object ho toh YYYY-MM-DD mein convert karo)
    const formatDate = (d) => {
      if (typeof d === "string") return d;
      if (!d || typeof d !== "object") return null;
      const { day, month, year } = d;
      if (!day || !month || !year) return null;
      return `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(
        2,
        "0"
      )}`;
    };

    const oldDOB = formatDate(oldData.newDOB);
    const newDOB = formatDate(newData.newDOB);

    if (oldDOB !== newDOB && newDOB) {
      changes.push({
        field: "birthday",
        oldValue: oldData.newDOB || null,
        newValue: newData.newDOB,
        source,
        markAsRead: 0,
      });
    }

    // Address ko compare karo (stringify karke simple check)
    const oldAddress = JSON.stringify(oldData.addresses || {});
    const newAddress = JSON.stringify(newData.addresses || {});

    if (oldAddress !== newAddress && newData.addresses) {
      changes.push({
        field: "location",
        oldValue: oldData.addresses || null,
        newValue: newData.addresses,
        source,
        markAsRead: 0,
      });
    }

    if (changes.length > 0) {
      await NetworkUpdatesLogs.create({ userId, changes, personalId });
    }

    return { success: true, changes };
  } catch (err) {
    console.error("Log banate waqt error:", err);
    throw err;
  }
};
