import { Button } from "@/components/ui/button";

const orders = [
  { id: 1, gig: "Frontend for NFT Mint", freelancer: "@0xDesign", status: "Funds Locked", statusColor: "bg-yellow-500/20 text-yellow-400" },
  { id: 2, gig: "Solana Token Launch", freelancer: "@SolidityPro", status: "In Progress", statusColor: "bg-blue-500/20 text-blue-400" },
  { id: 3, gig: "Smart Contract Audit", freelancer: "@0xAuditor", status: "Awaiting Approval", statusColor: "bg-green-500/20 text-green-400" },
  { id: 4, gig: "Community Strategy Doc", freelancer: "@Web3CM", status: "In Progress", statusColor: "bg-blue-500/20 text-blue-400" },
];

const Dashboard = () => {
  return (
    <section id="dashboard" className="container mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold mb-8">
        Active <span className="gradient-text">Smart Contracts</span>{" "}
        <span className="text-muted-foreground text-lg font-normal">(Escrow)</span>
      </h2>

      <div className="rounded-xl border border-border bg-card overflow-hidden">
        {/* Header */}
        <div className="hidden md:grid grid-cols-4 gap-4 px-6 py-3 bg-secondary text-sm font-medium text-muted-foreground">
          <span>Gig</span>
          <span>Freelancer</span>
          <span>Status</span>
          <span className="text-right">Action</span>
        </div>

        {/* Rows */}
        {orders.map((order) => (
          <div
            key={order.id}
            className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-4 px-6 py-4 border-t border-border items-center"
          >
            <span className="font-medium text-foreground text-sm">{order.gig}</span>
            <span className="text-sm text-muted-foreground">{order.freelancer}</span>
            <span>
              <span className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${order.statusColor}`}>
                {order.status}
              </span>
            </span>
            <div className="text-right">
              {order.status === "Awaiting Approval" ? (
                <Button variant="gradient" size="sm">
                  Approve & Release Funds
                </Button>
              ) : (
                <span className="text-xs text-muted-foreground">—</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Dashboard;
