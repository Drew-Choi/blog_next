const handler = (req, res) => {
  res.clearPreviewData();

  res.status(200).json({ message: 'cookie cleared' });
};

export default handler;
