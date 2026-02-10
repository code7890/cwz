import React, { useState, useMemo, useEffect } from "react";
import {
  Search,
  Star,
  Users,
  ExternalLink,
  TrendingUp,
  Code,
  Palette,
  Video,
  FileText,
  Database,
  Sparkles,
  Grid3X3,
  List,
  SlidersHorizontal,
  Target,
  CheckCircle,
} from "lucide-react";
import { supabase } from "../lib/supabase";

const AIToolsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedPricing, setSelectedPricing] = useState("all");
  const [sortBy, setSortBy] = useState("popular");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showFilters, setShowFilters] = useState(false);
  const [aiTools, setAiTools] = useState<
    Array<{
      id: number;
      name: string;
      description: string;
      category: string;
      pricing_type: string;
      rating?: number;
      tags?: string[];
      [key: string]: any;
    }>
  >([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    fetchAITools();
  }, []);

  const fetchAITools = async () => {
    try {
      const { data, error } = await supabase
        .from("ai_tools")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Supabase error:", error);
        throw error;
      }

      console.log("Fetched AI tools:", data);
      setAiTools(data || []);
    } catch (error) {
      console.error("Error fetching AI tools:", error);
    } finally {
      setLoading(false);
    }
  };

  // Calculate real counts for categories
  const getCategoryCount = (categoryId: string) => {
    if (categoryId === "all") return aiTools.length;
    return aiTools.filter((tool) => tool.category === categoryId).length;
  };

  const categories = [
    { id: "all", name: "All Tools", icon: Sparkles },
    { id: "writing", name: "Writing & Content", icon: FileText },
    { id: "design", name: "Design & Art", icon: Palette },
    { id: "coding", name: "Development", icon: Code },
    { id: "video", name: "Video & Audio", icon: Video },
    { id: "productivity", name: "Productivity", icon: Target },
    { id: "data", name: "Data & Analytics", icon: Database },
  ];

  const pricingTypes = [
    { id: "all", name: "All Pricing" },
    { id: "free", name: "Free" },
    { id: "freemium", name: "Freemium" },
    { id: "paid", name: "Paid" },
    { id: "subscription", name: "Subscription" },
  ];

  const sortOptions = [
    { id: "popular", name: "Most Popular" },
    { id: "newest", name: "Newest First" },
    { id: "rating", name: "Highest Rated" },
    { id: "name", name: "Name (A-Z)" },
  ];

  const filteredTools = useMemo(() => {
    let filtered = aiTools;

    if (searchQuery) {
      filtered = filtered.filter(
        (tool) =>
          tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (tool.tags &&
            tool.tags.some((tag: string) =>
              tag.toLowerCase().includes(searchQuery.toLowerCase()),
            )),
      );
    }

    if (selectedCategory !== "all") {
      filtered = filtered.filter((tool) => tool.category === selectedCategory);
    }

    if (selectedPricing !== "all") {
      filtered = filtered.filter(
        (tool) => tool.pricing_type === selectedPricing,
      );
    }

    switch (sortBy) {
      case "popular":
        filtered.sort((a, b) => b.popularity_score - a.popularity_score);
        break;
      case "newest":
        filtered.sort((a, b) => a.id - b.id);
        break;
      case "rating":
        filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      case "name":
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }

    return filtered;
  }, [searchQuery, selectedCategory, selectedPricing, sortBy, aiTools]);

  const getPricingBadge = (type: string) => {
    switch (type) {
      case "free":
        return {
          label: "Free",
          color: "text-green-600 bg-green-50 border-green-200",
        };
      case "freemium":
        return {
          label: "Freemium",
          color: "text-blue-600 bg-blue-50 border-blue-200",
        };
      case "paid":
        return {
          label: "Paid",
          color: "text-orange-600 bg-orange-50 border-orange-200",
        };
      case "subscription":
        return {
          label: "Subscription",
          color: "text-purple-600 bg-purple-50 border-purple-200",
        };
      default:
        return {
          label: type,
          color: "text-neutral-600 bg-neutral-50 border-neutral-200",
        };
    }
  };

  const ToolCard = ({
    tool,
    isListView = false,
  }: {
    tool: any;
    isListView?: boolean;
  }) => {
    const pricingBadge = getPricingBadge(tool.pricing_type);

    if (isListView) {
      return (
        <div className="bg-white border border-neutral-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group">
          <div className="flex items-start space-x-6">
            <div className="relative flex-shrink-0">
              <img
                src={tool.logo_url}
                alt={tool.name}
                className="w-20 h-20 object-cover rounded-xl border-2 border-neutral-100"
              />
              {tool.is_verified && (
                <div className="absolute -top-1 -right-1 bg-blue-500 rounded-full p-1">
                  <CheckCircle className="w-3 h-3 text-white" />
                </div>
              )}
            </div>

            <div className="flex-1">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-1 group-hover:text-primary-600 transition-colors">
                    {tool.name}
                  </h3>
                  <p className="text-neutral-600 mb-3">
                    {tool.shortDescription}
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <span
                    className={`text-xs font-medium px-2 py-1 rounded-full border ${pricingBadge.color}`}
                  >
                    {pricingBadge.label}
                  </span>
                  {tool.is_featured && (
                    <span className="text-xs font-medium px-2 py-1 rounded-full border bg-orange-50 text-orange-600 border-orange-200">
                      Featured
                    </span>
                  )}
                </div>
              </div>

              <div className="flex items-center space-x-4 mb-3">
                <div className="flex items-center text-sm text-neutral-600">
                  <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                  {tool.rating} ({tool.total_reviews.toLocaleString()} reviews)
                </div>
                <div className="flex items-center text-sm text-neutral-600">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  {tool.popularity_score}% popularity
                </div>
              </div>

              <div className="flex flex-wrap gap-1 mb-4">
                {tool.tags.slice(0, 5).map((tag: string, index: number) => (
                  <span
                    key={index}
                    className="text-xs bg-neutral-50 text-neutral-600 px-2 py-1 rounded-full border border-neutral-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={tool.website_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium"
              >
                Visit Website
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div
        className={`${tool.bgColor} ${tool.borderColor} border-2 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group hover:-translate-y-1`}
      >
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="relative">
              <img
                src={tool.logo_url}
                alt={tool.name}
                className="w-16 h-16 object-cover rounded-xl border-2 border-white shadow-sm"
              />
              {tool.is_verified && (
                <div className="absolute -top-1 -right-1 bg-blue-500 rounded-full p-1">
                  <CheckCircle className="w-3 h-3 text-white" />
                </div>
              )}
            </div>
            <div className="flex flex-col items-end space-y-2">
              <span
                className={`text-xs font-medium px-2 py-1 rounded-full border ${pricingBadge.color}`}
              >
                {pricingBadge.label}
              </span>
              {tool.is_featured && (
                <span className="text-xs font-medium px-2 py-1 rounded-full border bg-orange-50 text-orange-600 border-orange-200">
                  Featured
                </span>
              )}
            </div>
          </div>

          <h3 className="text-lg font-bold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors">
            {tool.name}
          </h3>

          <p className="text-neutral-700 text-sm mb-4 leading-relaxed line-clamp-2">
            {tool.shortDescription}
          </p>

          <div className="flex items-center justify-between text-sm text-neutral-600 mb-4">
            <div className="flex items-center">
              <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
              {tool.rating}
            </div>
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-1" />
              {(tool.total_reviews / 1000).toFixed(1)}K reviews
            </div>
          </div>

          <div className="flex flex-wrap gap-1 mb-4">
            {tool.tags.slice(0, 3).map((tag: string, index: number) => (
              <span
                key={index}
                className="text-xs bg-white text-neutral-600 px-2 py-1 rounded-full border border-neutral-200"
              >
                {tag}
              </span>
            ))}
            {tool.tags.length > 3 && (
              <span className="text-xs text-neutral-500 px-2 py-1">
                +{tool.tags.length - 3}
              </span>
            )}
          </div>

          <a
            href={tool.website_url}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-full ${tool.accentColor} bg-white border-2 ${tool.borderColor} px-4 py-3 rounded-xl font-semibold hover:bg-neutral-50 transition-all duration-300 flex items-center justify-center group-hover:shadow-md`}
          >
            Visit Website
            <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-cream-50 to-sage-50 pt-8 pb-16 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <p className="text-neutral-600">Loading AI tools...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-cream-50 to-sage-50 pt-8 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium mb-6 border border-primary-200">
            <Sparkles className="w-4 h-4 mr-2" />
            AI Tools Directory
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Discover <span className="text-primary-600">AI Tools</span> for
            Every Need
          </h1>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Centralized directory of the best AI tools. Find the perfect tool
            tailored to your needs effortlessly.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-neutral-200 p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
              <input
                type="text"
                placeholder="Search AI tools, categories, use cases..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>

            <div className="flex items-center space-x-3">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>

              <select
                value={selectedPricing}
                onChange={(e) => setSelectedPricing(e.target.value)}
                className="px-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
                {pricingTypes.map((pricing) => (
                  <option key={pricing.id} value={pricing.id}>
                    {pricing.name}
                  </option>
                ))}
              </select>

              <button
                onClick={() => setShowFilters(!showFilters)}
                className="px-4 py-3 border border-neutral-200 rounded-xl hover:bg-neutral-50 transition-colors flex items-center"
              >
                <SlidersHorizontal className="w-5 h-5 mr-2" />
                More
              </button>
            </div>
          </div>

          {showFilters && (
            <div className="mt-6 pt-6 border-t border-neutral-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Sort By
                  </label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full px-3 py-2 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  >
                    {sortOptions.map((option) => (
                      <option key={option.id} value={option.id}>
                        {option.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex items-end">
                  <button
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedCategory("all");
                      setSelectedPricing("all");
                      setSortBy("popular");
                    }}
                    className="px-4 py-2 text-primary-600 hover:text-primary-700 font-medium"
                  >
                    Clear All Filters
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-neutral-900">
              {filteredTools.length} Tool{filteredTools.length !== 1 ? "s" : ""}{" "}
              Found
            </h2>
            {searchQuery && (
              <p className="text-neutral-600 mt-1">
                Results for "<span className="font-medium">{searchQuery}</span>"
              </p>
            )}
          </div>

          <div className="flex items-center space-x-3">
            <div className="flex items-center bg-neutral-100 rounded-lg p-1">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === "grid"
                    ? "bg-white text-primary-600 shadow-sm"
                    : "text-neutral-600 hover:text-neutral-900"
                }`}
              >
                <Grid3X3 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === "list"
                    ? "bg-white text-primary-600 shadow-sm"
                    : "text-neutral-600 hover:text-neutral-900"
                }`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <div className="flex items-center space-x-4 overflow-x-auto pb-2">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-xl font-medium whitespace-nowrap transition-all duration-200 ${
                    selectedCategory === category.id
                      ? "bg-primary-600 text-white shadow-lg"
                      : "bg-white text-neutral-700 hover:bg-neutral-50 border border-neutral-200"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{category.name}</span>
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full ${
                      selectedCategory === category.id
                        ? "bg-primary-500 text-white"
                        : "bg-neutral-100 text-neutral-600"
                    }`}
                  >
                    {getCategoryCount(category.id)}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {filteredTools.length > 0 ? (
          <div
            className={
              viewMode === "grid"
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                : "space-y-6"
            }
          >
            {filteredTools.map((tool) => (
              <ToolCard
                key={tool.id}
                tool={tool}
                isListView={viewMode === "list"}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-12 h-12 text-neutral-400" />
            </div>
            <h3 className="text-xl font-semibold text-neutral-900 mb-2">
              No tools found
            </h3>
            <p className="text-neutral-600 mb-6">
              Try adjusting your search criteria or browse our available
              categories
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
                setSelectedPricing("all");
              }}
              className="px-6 py-3 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-colors font-medium"
            >
              Clear Filters
            </button>
          </div>
        )}

        {filteredTools.length > 0 && (
          <div className="text-center mt-12">
            <button className="px-8 py-4 bg-white border-2 border-neutral-200 text-neutral-700 rounded-xl hover:bg-neutral-50 hover:border-neutral-300 transition-all duration-200 font-medium">
              Load More Tools
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AIToolsPage;
