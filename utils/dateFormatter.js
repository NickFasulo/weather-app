module.exports = {
  dateFormatter: (dateStr) => {
    const date = new Date(dateStr);
    const dtf = new Intl.DateTimeFormat('en', {
      year: 'numeric',
      month: 'short',
      day: '2-digit',
    });

    const [
      { value: month },
      ,
      { value: day },
      ,
      { value: year },
    ] = dtf.formatToParts(date);

    return (currentDate = month + '-' + day + '-' + year);
  },
};
