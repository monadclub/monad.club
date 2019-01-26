module.exports =
  process.env.NODE_ENV === "test"
    ? "SELECT 1"
    : `
  CREATE OR REPLACE FUNCTION update_updated_at()
  RETURNS TRIGGER AS $$
  BEGIN
    NEW."updatedAt" = now();
    RETURN NEW;
  END;
  $$ language 'plpgsql';

  CREATE TRIGGER update_updated_at
  BEFORE UPDATE ON :table_name:
  FOR EACH ROW EXECUTE PROCEDURE update_updated_at();
`;
