import { FaPen, FaPlus, FaSearch, FaTrash } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { Badge, Table } from "flowbite-react";
import { Pagination } from "flowbite-react";
import { useCallback, useEffect, useState } from "react";
import { Label, TextInput } from "flowbite-react";
import { TableRowSkeleton } from "../../components/common/table/skeleton.component";
import { toast } from "react-toastify";
import bannerSvc from "./banner.service";
import TableActionButtons from "../../components/common/table/action-button.components";

const AdminBannerList = () => {
  const [paginationData, setPaginationData] = useState({
    currentPage: 1,
    totalPages: 1,
  });

  const [banner, setBanner] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [keyword, setKeyword] = useState<string>("");

  const onPageChange = (page: number) => {
    setPaginationData({
      ...paginationData,
      currentPage: page,
    });
    loadAllBanners({
      currentPage: page,
      limit: 10,
      search: keyword,
    });
  };

  const loadAllBanners = useCallback(async ({ currentPage = 1, limit = 10, search = "" }: { currentPage?: number; limit?: number; search?: string | null }) => {
    setLoading(true);
    try {
      const response: any = await bannerSvc.getRequest("/banner", { auth: true, params: { limit, page: currentPage, search } });
      setBanner(response.result);
      setPaginationData({
        currentPage: response.meta.currentPage,
        totalPages: response.meta.totalPages,
      });
    } catch (exception) {
      console.log(exception);
      toast.error("Cannot load Banner. Please Add Some Banner");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadAllBanners({ currentPage: 1, limit: 10 });
  }, [loadAllBanners]);

  useEffect(() => {
    const handler = setTimeout(() => {
      loadAllBanners({ currentPage: 1, limit: 10, search: keyword });
    }, 1000);

    return () => {
      clearTimeout(handler);
    };
  }, [keyword, loadAllBanners]);

  const deleteData = useCallback(async (id: string) => {
    try {
      setLoading(true);
      await bannerSvc.deleteRequest("/banner/" + id, { auth: true });
      toast.success("Banner Deleted Successfully");
      loadAllBanners({ currentPage: 1, limit: 10 });

    } catch (exception) {
      toast.error("Banner cannot be deleted at this moment.");
      console.log(exception);

    } finally {
      setLoading(false);
    }
  }, [loadAllBanners]);

  return (
    <>
      <div className="my-5 border-b border-spacing-4 flex justify-between">
        <h1 className="text-2xl font-semibold py-3">Banner List Page</h1>
        <NavLink to={"/admin/banner/create"} className={"flex text-center bg-slate-600 text-white px-3 py-4 rounded-xl"}>
          <FaPlus className="my-1" /> Add Banner
        </NavLink>
      </div>

      {/* Search */}
      <div className="overflow-x-auto">
        <div className="flex overflow-x-auto sm:justify-end my-5">
          <TextInput
            id="email4"
            type="email"
            rightIcon={FaSearch}
            placeholder="search"
            required
            onChange={(e) => {
              e.preventDefault();
              setKeyword(e.target.value);
            }}
          />
        </div>

        {/* Table */}
        <Table hoverable>
          <Table.Head>
            <Table.HeadCell className="bg-slate-800 text-white py-4">Title</Table.HeadCell>
            <Table.HeadCell className="bg-slate-800 text-white py-4">Link</Table.HeadCell>
            <Table.HeadCell className="bg-slate-800 text-white py-4">Status</Table.HeadCell>
            <Table.HeadCell className="bg-slate-800 text-white py-4">Image</Table.HeadCell>
            <Table.HeadCell className="bg-slate-800 text-white py-4">Actions</Table.HeadCell>
          </Table.Head>

          <Table.Body className="divide-y">
            {loading ? (
              <TableRowSkeleton rows={3} cols={5} />
            ) : banner ? (
              banner.map((row: any, indx: number) => (
                <Table.Row key={indx} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{row.name}</Table.Cell>
                  <Table.Cell>
                    <a href={row.link} className="font-medium text-teal-600 hover:underline text-teal-800" target="_banner">
                      {row.link}
                    </a>
                  </Table.Cell>
                  <Table.Cell className="flex flex-wrap">
                    <Badge color={row.status === "active" ? "green" : "red"} size={"sm"}>
                      {row.status === "active" ? "Publish" : "UnPublish"}
                    </Badge>
                  </Table.Cell>

                  <Table.Cell>
                    <img src={import.meta.env.VITE_IMAGE_URL + "banner/" + row.image} className="max:w-24" />
                  </Table.Cell>
                  <Table.Cell className="flex">
                    <TableActionButtons deleteAction={deleteData} id={row._id} editUrl={'/admin/banner/' + row._id + "/edit"} />
                  </Table.Cell>

                </Table.Row>
              ))
            ) : (
              <>Add Some Data</>
            )}
          </Table.Body>
        </Table>

        {/* Pagination */}
        <div className="flex overflow-x-auto sm:justify-center">
          <Pagination currentPage={paginationData.currentPage} totalPages={paginationData.totalPages} onPageChange={onPageChange} showIcons />
        </div>
      </div>
    </>
  );
};

export default AdminBannerList;
