import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient} data-oid="n00rdle">
      {children}
    </QueryClientProvider>
  );
};

export const getContext = () => ({
  queryClient,
});
